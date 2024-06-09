import { CommonModule } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {
  isOdd!: boolean;
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
  
  

  ngOnInit(): void {
    this.isOdd = this.flexDirection === 'row-reverse';
  }
}
