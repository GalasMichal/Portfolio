import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranlateModule } from '../../../../tranlate/tranlate.module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranlateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  isOdd!: boolean;
  @Input() flexDirection!: string;
  @Input() projectDescryption: string = '';
  @Input() projects = {
    title: 'Join',
    img: 'join.png',
    stack: 'JavaScript | HTML | CSS | Firebase',
    path: 'https://michal-galas.developerakademie.net/Join/index.html',
    github: 'https://github.com/GalasMichal/Sharkie',
    number: '01',
  };
  isAnimate = true;

  ngOnInit(): void {
    this.isOdd = this.flexDirection === 'row-reverse';
  }
}
