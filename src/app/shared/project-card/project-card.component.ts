import { Component, input, output } from '@angular/core';

import { RouterLink } from '@angular/router';

import { TranslatePipe } from '@ngx-translate/core';

import { Project, projectKey } from '../../core/data/projects.data';

import { GisMigrationDemoComponent } from '../gis-migration-demo/gis-migration-demo.component';

import { KendoGridPreviewComponent } from '../project-previews/kendo-grid-preview.component';

import { MapfishPreviewComponent } from '../project-previews/mapfish-preview.component';

import { RobloxPreviewComponent } from '../project-previews/roblox-preview.component';

import { RouteNaviPreviewComponent } from '../project-previews/route-navi-preview.component';

import { Scan3dPreviewComponent } from '../project-previews/scan-3d-preview.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    GisMigrationDemoComponent,

    MapfishPreviewComponent,

    KendoGridPreviewComponent,

    RobloxPreviewComponent,

    RouteNaviPreviewComponent,

    Scan3dPreviewComponent,

  ],

  templateUrl: './project-card.component.html',

})

export class ProjectCardComponent {

  project = input.required<Project>();

  expanded = input(false);

  toggle = output<void>();



  key(field: string): string {

    return projectKey(this.project().id, field);

  }



  hasPreview(): boolean {

    return !!this.project().previewType;

  }



  visualClass(): string {

    switch (this.project().visual) {

      case 'map':

        return 'abstract-visual-map';

      case 'ai':

        return 'abstract-visual-ai';

      case 'grid':

        return 'abstract-visual';

      default:

        return 'abstract-visual';

    }

  }

}


