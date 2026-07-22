import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home-page.component').then((m) => m.HomePageComponent) },
  {
    path: 'leistungen',
    loadComponent: () =>
      import('./pages/leistungen/leistungen-page.component').then((m) => m.LeistungenPageComponent),
  },
  {
    path: 'projekte',
    loadComponent: () =>
      import('./pages/projekte/projekte-page.component').then((m) => m.ProjektePageComponent),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills-page.component').then((m) => m.SkillsPageComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component').then((m) => m.AboutPageComponent),
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/kontakt/kontakt-page.component').then((m) => m.KontaktPageComponent),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint-page.component').then((m) => m.ImprintPageComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy/privacy-page.component').then((m) => m.PrivacyPageComponent),
  },
  {
    path: 'demo/gis-migration',
    loadComponent: () =>
      import('./pages/demo/gis-migration/gis-migration-page.component').then((m) => m.GisMigrationPageComponent),
  },
  { path: '**', redirectTo: '' },
];
