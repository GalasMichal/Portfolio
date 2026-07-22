import { APP_INITIALIZER, inject } from '@angular/core';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import de from '../../../../public/assets/i18n/de.json';
import en from '../../../../public/assets/i18n/en.json';
import pl from '../../../../public/assets/i18n/pl.json';

function initTranslations(): () => Promise<unknown> {
  const translate = inject(TranslateService);
  return () => {
    translate.setTranslation('de', de);
    translate.setTranslation('en', en);
    translate.setTranslation('pl', pl);
    translate.setFallbackLang('de');
    return firstValueFrom(translate.use('de'));
  };
}

export const provideTranslation = () => [
  ...provideTranslateService(),
  {
    provide: APP_INITIALIZER,
    useFactory: initTranslations,
    multi: true,
  },
];
