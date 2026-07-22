import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PROFILE } from '../../core/data/profile';
import { getFeaturedProjects } from '../../core/data/projects.data';
import {
  PROBLEM_ITEMS,
  PROCESS_STEPS,
  WHY_WORK_ITEMS,
  problemKey,
  processKey,
  whyWorkKey,
} from '../../core/data/home-sections.data';
import { getFeaturedServices } from '../../core/data/services.data';
import { FEATURED_SKILLS } from '../../core/data/skills.data';
import { localeForLang, isPortfolioLang, type PortfolioLang } from '../../core/i18n/portfolio-lang';
import { SchemaService } from '../../core/services/schema.service';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { TranslateArrayPipe } from '../../shared/pipes/translate-array.pipe';
import { RevealDirective } from '../../shared/reveal.directive';

const JSON_LD_ID = 'homepage-jsonld';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    TranslateArrayPipe,
    ServiceCardComponent,
    ProjectCardComponent,
    RevealDirective,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);
  private readonly schemaService = inject(SchemaService);
  private langSub?: Subscription;

  private readonly orbitRing = viewChild<ElementRef<SVGGElement>>('orbitRing');
  readonly orbitLabel = signal(this.formatOrbitLabel('time'));
  private orbitMode: 'time' | 'date' = 'time';

  // Pro Umrundung abwechselnd Uhrzeit und Datum anzeigen
  private readonly onOrbitIteration = (): void => {
    this.orbitMode = this.orbitMode === 'time' ? 'date' : 'time';
    this.orbitLabel.set(this.formatOrbitLabel(this.orbitMode));
  };

  private formatOrbitLabel(mode: 'time' | 'date'): string {
    const langRaw = this.translate.getCurrentLang() ?? 'de';
    const lang: PortfolioLang = isPortfolioLang(langRaw) ? langRaw : 'de';
    const locale = localeForLang(lang);
    const now = new Date();
    return mode === 'time'
      ? now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
      : now.toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric' });
  }

  readonly profile = PROFILE;
  readonly previewServices = getFeaturedServices(4);
  readonly featuredProjects = getFeaturedProjects();
  readonly featuredSkills = FEATURED_SKILLS;
  readonly problemItems = PROBLEM_ITEMS;
  readonly processSteps = PROCESS_STEPS;
  readonly whyWorkItems = WHY_WORK_ITEMS;
  readonly problemKey = problemKey;
  readonly processKey = processKey;
  readonly whyWorkKey = whyWorkKey;
  expandedProjectId: string | null = null;

  ngOnInit(): void {
    this.translate.get(['schema.serviceTypes', 'schema.knowsAbout', 'seo.home.description']).subscribe(() => {
      this.updateJsonLd();
    });
    this.langSub = this.translate.onLangChange.subscribe(() => this.updateJsonLd());
  }

  ngAfterViewInit(): void {
    this.orbitRing()?.nativeElement.addEventListener('animationiteration', this.onOrbitIteration);
  }

  ngOnDestroy(): void {
    this.orbitRing()?.nativeElement.removeEventListener(
      'animationiteration',
      this.onOrbitIteration,
    );
    this.langSub?.unsubscribe();
    this.schemaService.removeJsonLd(JSON_LD_ID);
  }

  toggleProject(id: string): void {
    this.expandedProjectId = this.expandedProjectId === id ? null : id;
  }

  private updateJsonLd(): void {
    this.schemaService.setJsonLd(JSON_LD_ID, this.schemaService.buildHomeSchema());
  }
}
