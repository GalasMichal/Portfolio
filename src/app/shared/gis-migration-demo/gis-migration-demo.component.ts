import {

  Component,

  ElementRef,

  OnDestroy,

  PLATFORM_ID,

  afterNextRender,

  inject,

  input,

  signal,

  viewChild,

} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { TranslatePipe } from '@ngx-translate/core';



type DemoPhase = 'leaflet' | 'transition' | 'openlayers';



const CENTER: [number, number] = [50.9867, 12.9753];

const POINT_COUNT = 420;



const PHASE_DURATIONS: Record<DemoPhase, number> = {

  leaflet: 5000,

  transition: 2000,

  openlayers: 6000,

};



const NEXT_PHASE: Record<DemoPhase, DemoPhase> = {

  leaflet: 'transition',

  transition: 'openlayers',

  openlayers: 'leaflet',

};



@Component({

  selector: 'app-gis-migration-demo',

  standalone: true,

  imports: [TranslatePipe],

  templateUrl: './gis-migration-demo.component.html',

  styleUrl: './gis-migration-demo.component.scss',

})

export class GisMigrationDemoComponent implements OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);

  private readonly mapHost = viewChild.required<ElementRef<HTMLElement>>('mapHost');



  readonly compact = input(false);



  readonly phase = signal<DemoPhase>('leaflet');

  readonly isPlaying = signal(true);

  readonly transitionActive = signal(false);



  private phaseTimer: ReturnType<typeof setTimeout> | null = null;

  private leafletMap: import('leaflet').Map | null = null;

  private olMap: import('ol/Map').default | null = null;

  private olWebglLayer: { dispose: () => void } | null = null;

  private initPending = false;

  private intersectionObserver: IntersectionObserver | null = null;

  private readonly isInViewport = signal(false);



  constructor() {

    if (isPlatformBrowser(this.platformId)) {

      afterNextRender(() => {

        this.setupIntersectionObserver();

        if (this.isInViewport()) {

          void this.startDemo();

        }

      });

    }

  }



  ngOnDestroy(): void {

    this.intersectionObserver?.disconnect();

    this.intersectionObserver = null;

    this.clearPhaseTimer();

    void this.destroyMaps();

  }



  togglePlay(): void {

    if (this.isPlaying()) {

      this.isPlaying.set(false);

      this.clearPhaseTimer();

      return;

    }

    this.isPlaying.set(true);

    if (this.isInViewport()) {

      void this.ensurePhaseRunning();

      this.scheduleNextPhase();

    }

  }



  restart(): void {

    this.clearPhaseTimer();

    this.isPlaying.set(true);

    if (!this.isInViewport()) {

      this.phase.set('leaflet');

      this.transitionActive.set(false);

      return;

    }

    void this.enterPhase('leaflet');

    this.scheduleNextPhase();

  }



  private setupIntersectionObserver(): void {

    const host = this.mapHost().nativeElement;

    this.intersectionObserver = new IntersectionObserver(

      (entries) => {

        const visible = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio > 0);

        if (visible === this.isInViewport()) {

          return;

        }

        this.isInViewport.set(visible);

        if (visible) {

          if (this.isPlaying()) {

            void this.ensurePhaseRunning();

            this.scheduleNextPhase();

          }

        } else {

          this.clearPhaseTimer();

          void this.destroyMaps();

        }

      },

      { threshold: [0, 0.05] },

    );

    this.intersectionObserver.observe(host);

  }



  private async startDemo(): Promise<void> {

    if (!this.isInViewport() || !this.isPlaying()) {

      return;

    }

    await this.enterPhase('leaflet');

    this.scheduleNextPhase();

  }



  private async ensurePhaseRunning(): Promise<void> {

    if (!this.isInViewport()) {

      return;

    }

    const phase = this.phase();

    if (phase === 'leaflet' && !this.leafletMap) {

      await this.initLeaflet();

    } else if (phase === 'openlayers' && !this.olMap) {

      await this.initOpenLayers();

    }

  }



  private scheduleNextPhase(): void {

    this.clearPhaseTimer();

    if (!this.isPlaying() || !this.isInViewport()) {

      return;

    }

    this.phaseTimer = setTimeout(() => {

      void this.advancePhase();

    }, PHASE_DURATIONS[this.phase()]);

  }



  private async advancePhase(): Promise<void> {

    const next = NEXT_PHASE[this.phase()];

    await this.enterPhase(next);

    this.scheduleNextPhase();

  }



  private async enterPhase(phase: DemoPhase): Promise<void> {

    await this.destroyMaps();

    this.phase.set(phase);

    this.transitionActive.set(phase === 'transition');



    if (!this.isInViewport()) {

      return;

    }



    if (phase === 'leaflet') {

      await this.initLeaflet();

    } else if (phase === 'openlayers') {

      await this.initOpenLayers();

    }

  }



  private isHostConnected(): boolean {

    try {

      return this.mapHost().nativeElement.isConnected;

    } catch {

      return false;

    }

  }



  private async initLeaflet(): Promise<void> {

    if (!isPlatformBrowser(this.platformId) || this.initPending || !this.isInViewport() || !this.isHostConnected()) {

      return;

    }

    this.initPending = true;

    try {

      const L = (await import('leaflet')).default;

      const host = this.mapHost().nativeElement;

      if (!host.isConnected) {

        return;

      }

      host.innerHTML = '';



      const map = L.map(host, {

        zoomControl: true,

        zoomAnimation: false,

        fadeAnimation: false,

      }).setView(CENTER, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        maxZoom: 19,

        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',

      }).addTo(map);



      const polygonCoords = this.polygonLatLng();

      L.polygon(polygonCoords, {

        color: '#c45c26',

        weight: 2,

        fillColor: '#e67e22',

        fillOpacity: 0.25,

      }).addTo(map);



      for (const [lat, lng] of this.randomPointsLatLng()) {

        L.circleMarker([lat, lng], {

          radius: 5,

          fillColor: '#2b6cb0',

          color: '#1a365d',

          weight: 1,

          fillOpacity: 0.85,

        }).addTo(map);

      }



      map.fitBounds(polygonCoords, { padding: [24, 24], animate: false });

      this.leafletMap = map;

    } finally {

      this.initPending = false;

    }

  }



  private async initOpenLayers(): Promise<void> {

    if (!isPlatformBrowser(this.platformId) || this.initPending || !this.isInViewport() || !this.isHostConnected()) {

      return;

    }

    this.initPending = true;

    try {

      const [{ default: Map }, { default: View }, { default: TileLayer }, { default: OSM }, { default: VectorLayer }, { default: VectorSource }, { default: Feature }, { default: WebGLPointsLayer }, { Polygon, Point }, { fromLonLat }, { Fill, Stroke, Style }] =

        await Promise.all([

          import('ol/Map'),

          import('ol/View'),

          import('ol/layer/Tile'),

          import('ol/source/OSM'),

          import('ol/layer/Vector'),

          import('ol/source/Vector'),

          import('ol/Feature'),

          import('ol/layer/WebGLPoints'),

          import('ol/geom'),

          import('ol/proj'),

          import('ol/style'),

        ]);



      const host = this.mapHost().nativeElement;

      if (!host.isConnected) {

        return;

      }

      host.innerHTML = '';



      const polygon = new Polygon([this.polygonLonLat().map(([lng, lat]) => fromLonLat([lng, lat]))]);

      const polygonFeature = new Feature({ geometry: polygon });

      const polygonLayer = new VectorLayer({

        source: new VectorSource({ features: [polygonFeature] }),

        style: new Style({

          fill: new Fill({ color: 'rgba(230, 126, 34, 0.25)' }),

          stroke: new Stroke({ color: '#c45c26', width: 2 }),

        }),

      });



      const pointFeatures = this.randomPointsLatLng().map(([lat, lng]) => {

        return new Feature({ geometry: new Point(fromLonLat([lng, lat])) });

      });

      const pointsSource = new VectorSource({ features: pointFeatures });

      const webglLayer = new WebGLPointsLayer({

        source: pointsSource,

        style: {

          'circle-radius': 5,

          'circle-fill-color': '#2b6cb0',

          'circle-stroke-color': '#1a365d',

          'circle-stroke-width': 1,

          'circle-opacity': 0.9,

        },

        disableHitDetection: true,

      });



      const map = new Map({

        target: host,

        layers: [new TileLayer({ source: new OSM() }), polygonLayer, webglLayer],

        view: new View({

          center: fromLonLat([CENTER[1], CENTER[0]]),

          zoom: 13,

        }),

      });



      map.getView().fit(polygon.getExtent(), { padding: [24, 24, 24, 24], duration: 0 });



      this.olMap = map;

      this.olWebglLayer = webglLayer;

    } finally {

      this.initPending = false;

    }

  }



  private async destroyMaps(): Promise<void> {

    await this.destroyLeaflet();

    this.destroyOpenLayers();

    this.clearMapHost();

  }



  private destroyLeaflet(): Promise<void> {

    const map = this.leafletMap;

    if (!map) {

      return Promise.resolve();

    }

    this.leafletMap = null;



    return new Promise((resolve) => {

      requestAnimationFrame(() => {

        try {

          map.stop();

          const mapWithInternals = map as import('leaflet').Map & {

            _animatingZoom?: boolean;

            _zoomAnimated?: boolean;

          };

          if (mapWithInternals._animatingZoom) {

            map.off('zoomanim');

            mapWithInternals._animatingZoom = false;

          }

          map.off();

          if (map.getContainer()?.isConnected) {

            map.remove();

          }

        } catch {

          // map already torn down

        }

        resolve();

      });

    });

  }



  private destroyOpenLayers(): void {

    if (this.olWebglLayer) {

      this.olWebglLayer.dispose();

      this.olWebglLayer = null;

    }



    if (this.olMap) {

      this.olMap.setTarget(undefined);

      this.olMap.dispose();

      this.olMap = null;

    }

  }



  private clearMapHost(): void {

    if (!isPlatformBrowser(this.platformId)) {

      return;

    }

    try {

      const host = this.mapHost().nativeElement;

      if (host.isConnected) {

        host.innerHTML = '';

      }

    } catch {

      // view not ready during teardown

    }

  }



  private clearPhaseTimer(): void {

    if (this.phaseTimer) {

      clearTimeout(this.phaseTimer);

      this.phaseTimer = null;

    }

  }



  private polygonLatLng(): [number, number][] {

    const [lat, lng] = CENTER;

    const dLat = 0.018;

    const dLng = 0.028;

    return [

      [lat - dLat, lng - dLng],

      [lat - dLat * 0.4, lng + dLng],

      [lat + dLat, lng + dLng * 0.6],

      [lat + dLat * 0.8, lng - dLng * 0.5],

      [lat - dLat, lng - dLng],

    ];

  }



  private polygonLonLat(): [number, number][] {

    return this.polygonLatLng().map(([lat, lng]) => [lng, lat]);

  }



  private randomPointsLatLng(): [number, number][] {

    const [lat, lng] = CENTER;

    const points: [number, number][] = [];

    let seed = 42;

    const rand = () => {

      seed = (seed * 16807 + 0) % 2147483647;

      return (seed - 1) / 2147483646;

    };

    for (let i = 0; i < POINT_COUNT; i++) {

      points.push([lat + (rand() - 0.5) * 0.034, lng + (rand() - 0.5) * 0.052]);

    }

    return points;

  }

}


