import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { GisMigrationDemoComponent } from '../../../shared/gis-migration-demo/gis-migration-demo.component';

@Component({
  selector: 'app-gis-migration-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe, GisMigrationDemoComponent],
  template: `
    <section class="pt-24 pb-20 px-4 md:px-12">
      <div class="max-w-[1280px] mx-auto space-y-6">
        <a routerLink="/projekte" class="inline-block text-sm font-label text-primary hover:underline">
          ← {{ 'gisDemo.backToProjects' | translate }}
        </a>
        <div class="space-y-3 max-w-3xl">
          <h1 class="font-headline text-3xl md:text-4xl font-bold text-on-surface">{{ 'gisDemo.title' | translate }}</h1>
          <p class="text-on-surface-variant leading-relaxed">{{ 'gisDemo.subtitle' | translate }}</p>
          <p class="text-sm text-on-surface-variant border border-outline-variant/30 rounded-lg px-4 py-3 bg-surface-container-low">
            {{ 'gisDemo.disclaimer' | translate }}
          </p>
        </div>
        <app-gis-migration-demo />
      </div>
    </section>
  `,
})
export class GisMigrationPageComponent {}
