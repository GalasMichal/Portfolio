import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AOSService } from '../../../../shared/services/AOS/aos.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {

  isOdd!: boolean;
  private aosService = inject(AOSService);

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
    this.aosService.initAos();
  }
}
