import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { PROFILE } from '../../core/data/profile';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe, LogoComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
