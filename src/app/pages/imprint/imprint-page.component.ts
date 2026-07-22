import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  template: `<section class="pt-24 pb-20 px-4 md:px-12"><div class="max-w-3xl mx-auto prose-legal" [innerHTML]="content()"></div></section>`,
})
export class ImprintPageComponent implements OnInit, OnDestroy {
  private readonly translate = inject(TranslateService);
  private readonly sanitizer = inject(DomSanitizer);
  private sub?: Subscription;
  readonly content = signal<SafeHtml>('');

  ngOnInit(): void {
    this.updateContent();
    this.sub = this.translate.onLangChange.subscribe(() => this.updateContent());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private updateContent(): void {
    this.content.set(this.sanitizer.bypassSecurityTrustHtml(this.translate.instant('legal.imprint')));
  }
}
