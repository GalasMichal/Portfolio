import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { PROJECT_FILTERS, ProjectFilter, filterProjects } from '../../core/data/projects.data';

import { SchemaService } from '../../core/services/schema.service';

import { ProjectCardComponent } from '../../shared/project-card/project-card.component';



const JSON_LD_ID = 'projekte-jsonld';



@Component({

  selector: 'app-projekte-page',

  standalone: true,

  imports: [TranslatePipe, ProjectCardComponent],

  templateUrl: './projekte-page.component.html',

})

export class ProjektePageComponent implements OnInit, OnDestroy {

  private readonly schemaService = inject(SchemaService);

  private readonly translate = inject(TranslateService);

  private langSub?: Subscription;



  readonly filters = PROJECT_FILTERS;

  readonly activeFilter = signal<ProjectFilter>('alle');

  expandedProjectId: string | null = null;



  ngOnInit(): void {

    this.updateJsonLd();

    this.langSub = this.translate.onLangChange.subscribe(() => this.updateJsonLd());

  }



  ngOnDestroy(): void {

    this.langSub?.unsubscribe();

    this.schemaService.removeJsonLd(JSON_LD_ID);

  }



  projects() {

    return filterProjects(this.activeFilter());

  }



  setFilter(filter: ProjectFilter): void {

    this.activeFilter.set(filter);

    this.expandedProjectId = null;

  }



  toggleProject(id: string): void {

    this.expandedProjectId = this.expandedProjectId === id ? null : id;

  }



  private updateJsonLd(): void {

    this.schemaService.setJsonLd(JSON_LD_ID, this.schemaService.buildProjectsSchema());

  }

}


