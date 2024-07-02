import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/services/skills/skills.service';
import { TranlateModule } from '../../tranlate/tranlate.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranlateModule, HttpClientModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  skills = inject(SkillsService);
  isAnimate = false;
  startAnimation() {
    this.isAnimate = true;
  }
  isAnimating = false;

  startAnimation2() {
    this.isAnimating = true;

  }

}
