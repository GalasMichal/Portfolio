import { Component } from '@angular/core';
import { ProjectComponent } from './project/project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
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
        'Task Manager nach dem Kanban-Prinzip. Aufgaben per Drag-and-Drop erstellen und organisieren, Benutzer und Kategorien zuweisen.',
      path: 'https://join.michal-galas.de/index.html',
      github: 'https://github.com/GalasMichal/Join-',
      number: '01',
    },
    {
      title: 'Sharkie',
      img: 'sharkie.png',
      stack: 'JavaScript | HTML | CSS',
      about:
        'Ein einfaches Jump-and-Run-Spiel, das auf objektorientierter Programmierung basiert. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.',
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
