import { Routes, ExtraOptions } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { provideRouter, withRouterConfig } from '@angular/router';
import { MenuComponent } from './shared/components/header/menu/menu/menu.component';

// Definiere zusätzliche Optionen für den Router
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64] // Optional: um den Header auszugleichen
};

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      { path: '', redirectTo: 'above-the-fold', pathMatch: 'full' },
      { path: 'above-the-fold', component: AboveTheFoldComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'my-skills', component: MySkillsComponent },
      { path: 'portfolio', component: PortfolioComponent }
    ]
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'menu', component: MenuComponent},
];

// Router-Konfiguration bereitstellen
export const routing = provideRouter(routes, withRouterConfig(routerOptions));
