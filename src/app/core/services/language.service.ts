import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPortfolioLang, type PortfolioLang } from '../i18n/portfolio-lang';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);

  init(): void {
    const saved = isPlatformBrowser(this.platformId) ? localStorage.getItem(STORAGE_KEY) : null;
    const lang: PortfolioLang = isPortfolioLang(saved) ? saved : 'de';
    this.translate.setFallbackLang('de').subscribe();
    this.translate.use(lang).subscribe();
  }

  currentLang(): PortfolioLang {
    const lang = this.translate.getCurrentLang() ?? 'de';
    return isPortfolioLang(lang) ? lang : 'de';
  }

  setLanguage(lang: PortfolioLang): void {
    this.translate.use(lang).subscribe();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }
}
