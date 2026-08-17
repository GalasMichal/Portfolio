import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { skillGroupKey } from '../../core/data/skills.data';
import { TranslateArrayPipe } from '../pipes/translate-array.pipe';

@Component({
  selector: 'app-skill-group',
  standalone: true,
  imports: [TranslatePipe, TranslateArrayPipe],
  templateUrl: './skill-group.component.html',
})
export class SkillGroupComponent {
  groupId = input.required<string>();

  key(field: 'title' | 'skills'): string {
    return skillGroupKey(this.groupId(), field);
  }
}
