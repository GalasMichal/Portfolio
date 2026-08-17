import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects.data';
import { SERVICES } from '../data/services.data';
import { SITE_URL } from '../data/site.config';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private readonly document = inject(DOCUMENT);
  private readonly translate = inject(TranslateService);

  setJsonLd(id: string, schema: object): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  removeJsonLd(id: string): void {
    this.document.getElementById(id)?.remove();
  }

  buildHomeSchema(): object {
    const description = this.translate.instant('seo.home.description');
    const serviceTypes = this.instantArray('schema.serviceTypes');
    const knowsAbout = this.instantArray('schema.knowsAbout');

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: PROFILE.name,
          url: SITE_URL,
          email: PROFILE.contact.email,
          jobTitle: this.translate.instant('schema.jobTitle'),
          knowsAbout,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'DE',
          },
          sameAs: [PROFILE.contact.linkedin, PROFILE.contact.github],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: PROFILE.name,
          description,
          publisher: { '@id': `${SITE_URL}/#person` },
          inLanguage: ['de', 'en', 'pl'],
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#service`,
          name: this.translate.instant('schema.serviceName'),
          url: SITE_URL,
          description,
          provider: { '@id': `${SITE_URL}/#person` },
          areaServed: 'DE',
          serviceType: serviceTypes,
        },
        {
          '@type': 'ItemList',
          '@id': `${SITE_URL}/#skills`,
          name: 'Skills',
          itemListElement: knowsAbout.map((skill, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: skill,
          })),
        },
      ],
    };
  }

  buildProjectsSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.translate.instant('projects.headline'),
      description: this.translate.instant('seo.projekte.description'),
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: this.translate.instant(`projects.items.${project.id}.title`),
          description: this.translate.instant(`projects.items.${project.id}.shortDescription`),
          author: { '@id': `${SITE_URL}/#person` },
          keywords: project.technologies.join(', '),
        },
      })),
    };
  }

  buildServicesSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: this.translate.instant('services.headline'),
      description: this.translate.instant('seo.leistungen.description'),
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: this.translate.instant(`services.items.${service.id}.title`),
          description: this.translate.instant(`services.items.${service.id}.description`),
          provider: { '@id': `${SITE_URL}/#person` },
          areaServed: 'DE',
        },
      })),
    };
  }

  buildContactSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: this.translate.instant('seo.kontakt.title'),
      description: this.translate.instant('seo.kontakt.description'),
      url: `${SITE_URL}/kontakt`,
      mainEntity: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: PROFILE.name,
        email: PROFILE.contact.email,
        url: SITE_URL,
        jobTitle: this.translate.instant('schema.jobTitle'),
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: PROFILE.contact.email,
          availableLanguage: ['German', 'English', 'Polish'],
        },
      },
    };
  }

  private instantArray(key: string): string[] {
    const value = this.translate.instant(key);
    return Array.isArray(value) ? (value as string[]) : [];
  }
}
