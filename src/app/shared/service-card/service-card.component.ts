import { Component, inject, input, output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateArrayPipe } from '../pipes/translate-array.pipe';
import { serviceKey } from '../../core/data/services.data';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [TranslatePipe, TranslateArrayPipe],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  private readonly translate = inject(TranslateService);

  serviceId = input.required<string>();
  icon = input.required<string>();
  wide = input(false);
  selected = output<void>();

  key(field: 'title' | 'description' | 'tags' | 'outcomes' | 'techHint' | 'category'): string {
    return serviceKey(this.serviceId(), field);
  }

  hasText(field: 'techHint' | 'category'): boolean {
    const translationKey = this.key(field);
    const value = this.translate.instant(translationKey);
    return typeof value === 'string' && value.length > 0 && value !== translationKey;
  }
}
