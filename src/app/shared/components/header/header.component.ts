import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranlateModule } from '../../../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranlateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;


  closeMenu(){
    this.isMenuOpen = false;
  }

  menu = [
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
  ]

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.get('ABOUTME').subscribe((res: string) => {
      console.log('Translation for ABOUTME:', res);
    });
  }

  changeLanguage(language: string) {
    console.log('Changing language to:', language);
    this.translate.use(language);
  }

}
