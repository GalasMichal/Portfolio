import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranlateModule } from '../../translate/translate.module';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranlateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Standardmäßig eingestellte Sprache

    // Optional: Sprache ändern (Beispiel: auf Deutsch)
    this.translate.use('de');
  }
}
