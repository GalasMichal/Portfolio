export type PortfolioLang = 'de' | 'en' | 'pl';

export const PORTFOLIO_LANGS: PortfolioLang[] = ['de', 'en', 'pl'];

export function isPortfolioLang(value: string | null): value is PortfolioLang {
  return value === 'de' || value === 'en' || value === 'pl';
}

export function localeForLang(lang: PortfolioLang): string {
  switch (lang) {
    case 'en':
      return 'en-GB';
    case 'pl':
      return 'pl-PL';
    default:
      return 'de-DE';
  }
}

export function ogLocaleForLang(lang: PortfolioLang): string {
  switch (lang) {
    case 'en':
      return 'en_US';
    case 'pl':
      return 'pl_PL';
    default:
      return 'de_DE';
  }
}
