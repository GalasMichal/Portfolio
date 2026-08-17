import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PROFILE } from '../../core/data/profile';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { LogoComponent } from '../../shared/logo/logo.component';
import type { PortfolioLang } from '../../core/i18n/portfolio-lang';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe, LogoComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly profile = PROFILE;
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  changeLanguage(lang: PortfolioLang): void {
    this.languageService.setLanguage(lang);
  }
}
