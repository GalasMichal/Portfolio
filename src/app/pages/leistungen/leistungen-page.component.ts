import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { SERVICES } from '../../core/data/services.data';

import { SchemaService } from '../../core/services/schema.service';

import { ServiceCardComponent } from '../../shared/service-card/service-card.component';



const JSON_LD_ID = 'leistungen-jsonld';



@Component({

  selector: 'app-leistungen-page',

  standalone: true,

  imports: [TranslatePipe, ServiceCardComponent],

  templateUrl: './leistungen-page.component.html',

})

export class LeistungenPageComponent implements OnInit, OnDestroy {

  private readonly schemaService = inject(SchemaService);

  private readonly translate = inject(TranslateService);

  private langSub?: Subscription;



  readonly services = SERVICES;



  ngOnInit(): void {

    this.updateJsonLd();

    this.langSub = this.translate.onLangChange.subscribe(() => this.updateJsonLd());

  }



  ngOnDestroy(): void {

    this.langSub?.unsubscribe();

    this.schemaService.removeJsonLd(JSON_LD_ID);

  }



  private updateJsonLd(): void {

    this.schemaService.setJsonLd(JSON_LD_ID, this.schemaService.buildServicesSchema());

  }

}


