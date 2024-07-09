import { Component } from '@angular/core';
import { TranlateModule } from '../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranlateModule, HttpClientModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
