import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateArray',
  standalone: true,
  pure: false,
})
export class TranslateArrayPipe implements PipeTransform {
  private readonly translate = inject(TranslateService);

  transform(key: string): unknown[] {
    const value = this.translate.instant(key);
    return Array.isArray(value) ? value : [];
  }
}
