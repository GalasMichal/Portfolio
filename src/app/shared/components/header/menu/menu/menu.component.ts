import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigate(path: string, event: Event): void {
    const target = event.target as HTMLElement;

    target.classList.add('clickbg');

    setTimeout(() => {
      this.router.navigate([path]);
      target.classList.remove('clickbg');
    }, 1000);
  }
}
