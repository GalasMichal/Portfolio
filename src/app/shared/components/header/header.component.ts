import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
routeParameterValue: any;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.setMenuItems1();
    this.translate.onLangChange.subscribe(() => {
      this.setMenuItems();
    });
  }

  setMenuItems1(){
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
}
