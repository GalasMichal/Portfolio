import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SKILL_GROUPS } from '../../core/data/skills.data';
import { SkillGroupComponent } from '../../shared/skill-group/skill-group.component';
import { TranslateArrayPipe } from '../../shared/pipes/translate-array.pipe';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [TranslatePipe, TranslateArrayPipe, SkillGroupComponent],
  templateUrl: './skills-page.component.html',
})
export class SkillsPageComponent {
  readonly groups = SKILL_GROUPS;
}
