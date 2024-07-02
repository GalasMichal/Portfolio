import { Component } from '@angular/core';
import { ProjectComponent } from './project/project/project.component';
import { CommonModule } from '@angular/common';
import { TranlateModule } from '../../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranlateModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      img: 'join.png',
      stack: 'JavaScript | HTML | CSS | Firebase',
      about:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      path: 'https://join.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/Join-',
      number: '01',
    },
    {
      title: 'Sharkie',
      img: 'sharkie.png',
      stack: 'JavaScript | HTML | CSS',
      about:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      path: 'https://sharkie.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/Sharkie',
      number: '02',
    },
  ];

  isAnimating = false;

  startAnimation() {
    this.isAnimating = true;

  }
}
