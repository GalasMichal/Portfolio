import { Component } from '@angular/core';
import { ProjectComponent } from './project/project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'DaBubble',
      img: 'dabubble.png',
      stack: 'Angular | HTML | CSS | TypeScript | Firebase',
      path: 'http://da-bubble.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/DA_Bubble',
      number: '01',
    },
    {
      title: 'Join',
      img: 'join.png',
      stack: 'JavaScript | HTML | CSS | Firebase',
      path: 'https://join.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/Join-',
      number: '02',
    },
    {
      title: 'Sharkie',
      img: 'sharkie.png',
      stack: 'JavaScript | HTML | CSS',
      path: 'https://sharkie.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/Sharkie',
      number: '03',
    },
  ];

  isAnimating = false;

  startAnimation() {
    this.isAnimating = true;
  }
}
