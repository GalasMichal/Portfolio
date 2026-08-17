import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { PROFILE } from '../../core/data/profile';

import { SchemaService } from '../../core/services/schema.service';

import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';



const JSON_LD_ID = 'kontakt-jsonld';



@Component({

  selector: 'app-kontakt-page',

  standalone: true,

  imports: [TranslatePipe, ContactFormComponent],

  templateUrl: './kontakt-page.component.html',

})

export class KontaktPageComponent implements OnInit, OnDestroy {

  private readonly schemaService = inject(SchemaService);

  private readonly translate = inject(TranslateService);

  private langSub?: Subscription;



  readonly profile = PROFILE;



  ngOnInit(): void {

    this.updateJsonLd();

    this.langSub = this.translate.onLangChange.subscribe(() => this.updateJsonLd());

  }



  ngOnDestroy(): void {

    this.langSub?.unsubscribe();

    this.schemaService.removeJsonLd(JSON_LD_ID);

  }



  private updateJsonLd(): void {

    this.schemaService.setJsonLd(JSON_LD_ID, this.schemaService.buildContactSchema());

  }

}


