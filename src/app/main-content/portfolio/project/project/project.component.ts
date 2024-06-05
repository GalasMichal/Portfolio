import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() flexDirection!: string;
  @Input()projects = {
    title: 'Join',
    img: 'join.png',
    stack: 'JavaScript | HTML | CSS | Firebase',
    about:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    path: 'https://michal-galas.developerakademie.net/Join/index.html',
    github: 'https://github.com/GalasMichal/Sharkie',
    number: '01',
  };
  isAnimate = true;

  


}
