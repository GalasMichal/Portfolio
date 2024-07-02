import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { TranlateModule } from '../../tranlate/tranlate.module';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [HttpClientModule, TranlateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Standardmäßig eingestellte Sprache

    // Optional: Sprache ändern (Beispiel: auf Deutsch)
    // this.translate.use('de');
  }
}
