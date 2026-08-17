import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateArrayPipe } from '../../shared/pipes/translate-array.pipe';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [TranslatePipe, TranslateArrayPipe],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {}
