import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranlateModule } from '../../../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranlateModule, HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
