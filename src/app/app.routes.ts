import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MenuComponent } from './shared/components/header/menu/menu/menu.component';




export const routes: Routes = [
  { path: '', redirectTo: 'main-content', component: MainContentComponent, },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'menu', component: MenuComponent },
];
