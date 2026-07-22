import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'leistungen', renderMode: RenderMode.Prerender },
  { path: 'projekte', renderMode: RenderMode.Prerender },
  { path: 'skills', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'kontakt', renderMode: RenderMode.Prerender },
  { path: 'imprint', renderMode: RenderMode.Prerender },
  { path: 'privacy-policy', renderMode: RenderMode.Prerender },
  { path: 'demo/gis-migration', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Client },
];
