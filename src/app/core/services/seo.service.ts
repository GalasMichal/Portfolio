import { DOCUMENT } from '@angular/common';

import { Injectable, inject } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

import { NavigationEnd, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { filter } from 'rxjs';

import { OG_IMAGE_PATH, ROUTE_SEO_KEYS, SITE_URL } from '../data/site.config';

import { PORTFOLIO_LANGS, isPortfolioLang, ogLocaleForLang } from '../i18n/portfolio-lang';



@Injectable({ providedIn: 'root' })

export class SeoService {

  private readonly title = inject(Title);

  private readonly meta = inject(Meta);

  private readonly router = inject(Router);

  private readonly translate = inject(TranslateService);

  private readonly document = inject(DOCUMENT);



  init(): void {

    this.update();

    this.router.events

      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))

      .subscribe(() => this.update());

    this.translate.onLangChange.subscribe(() => this.update());

  }



  private update(): void {

    const path = this.normalizePath(this.router.url);

    const routeKey = ROUTE_SEO_KEYS[path] ?? 'home';

    const canonicalUrl = this.buildCanonicalUrl(path);



    this.translate.get([`seo.${routeKey}.title`, `seo.${routeKey}.description`]).subscribe((translations) => {

      const pageTitle = translations[`seo.${routeKey}.title`];

      const description = translations[`seo.${routeKey}.description`];

      const langRaw = this.translate.getCurrentLang() ?? 'de';

      const lang = isPortfolioLang(langRaw) ? langRaw : 'de';

      const ogImage = `${SITE_URL}${OG_IMAGE_PATH}`;



      this.title.setTitle(pageTitle);

      this.meta.updateTag({ name: 'description', content: description });

      this.setCanonical(canonicalUrl);

      this.setHtmlLang(lang);

      this.setHreflang(canonicalUrl);



      this.meta.updateTag({ property: 'og:title', content: pageTitle });

      this.meta.updateTag({ property: 'og:description', content: description });

      this.meta.updateTag({ property: 'og:url', content: canonicalUrl });

      this.meta.updateTag({ property: 'og:image', content: ogImage });

      this.meta.updateTag({ property: 'og:type', content: 'website' });

      this.meta.updateTag({ property: 'og:site_name', content: 'Michal Galas' });

      this.meta.updateTag({ property: 'og:locale', content: ogLocaleForLang(lang) });



      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

      this.meta.updateTag({ name: 'twitter:title', content: pageTitle });

      this.meta.updateTag({ name: 'twitter:description', content: description });

      this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    });

  }



  private normalizePath(url: string): string {

    const path = url.split('?')[0].split('#')[0];

    if (path.length > 1 && path.endsWith('/')) {

      return path.slice(0, -1);

    }

    return path || '/';

  }



  private buildCanonicalUrl(path: string): string {

    if (path === '/' || path === '') {

      return SITE_URL;

    }

    return `${SITE_URL}${path}`;

  }



  private setCanonical(url: string): void {

    const head = this.document.head;

    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {

      link = this.document.createElement('link');

      link.setAttribute('rel', 'canonical');

      head.appendChild(link);

    }

    link.setAttribute('href', url);

  }



  private setHtmlLang(lang: string): void {

    this.document.documentElement.setAttribute('lang', lang);

  }



  private setHreflang(canonicalUrl: string): void {

    const head = this.document.head;

    head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());



    for (const lang of PORTFOLIO_LANGS) {

      const link = this.document.createElement('link');

      link.setAttribute('rel', 'alternate');

      link.setAttribute('hreflang', lang);

      link.setAttribute('href', canonicalUrl);

      head.appendChild(link);

    }



    const defaultLink = this.document.createElement('link');

    defaultLink.setAttribute('rel', 'alternate');

    defaultLink.setAttribute('hreflang', 'x-default');

    defaultLink.setAttribute('href', canonicalUrl);

    head.appendChild(defaultLink);

  }

}


