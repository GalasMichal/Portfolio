import { Component } from '@angular/core';
import { TranlateModule } from '../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranlateModule, HttpClientModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
