import { CommonModule } from '@angular/common';
import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  menu: { name: string; path: string }[] = [];
  renderer: Renderer2;

  constructor(private translate: TranslateService, rendererFactory: RendererFactory2) {
    this.translate.setDefaultLang('en');
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateBodyOverflow();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyOverflow();
  }

  ngOnInit() {
    this.setMenuItems1();
    this.translate.onLangChange.subscribe(() => {
      this.setMenuItems();
    });
  }

  setMenuItems1() {
    this.menu = [
      {
        name: 'About me',
        path: '#about-me',
      },
      {
        name: 'My skills',
        path: '#my-skills',
      },
      {
        name: 'Portfolio',
        path: '#portfolio',
      },
    ];
  }

  setMenuItems() {
    this.menu = [
      {
        name: this.translate.instant('ABOUTME'),
        path: '#about-me',
      },
      {
        name: this.translate.instant('MY_SKILLS'),
        path: '#my-skills',
      },
      {
        name: 'Portfolio',
        path: '#portfolio',
      },
    ];
  }

  changeLanguage(language: string) {
    console.log('Changing language to:', language);
    this.translate.use(language);
  }

  private updateBodyOverflow() {
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow-y');
    }
  }

}
