import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  mySkills = [

    // ds ist mein beispiel dafür wie man solchen json 'global' definiert und von überall mit hilfe von inject implementieren kann

    { path: 'icon0.png', name: 'Angular' },
    { path: 'icon1.png', name: 'TypeScript' },
    { path: 'icon2.png', name: 'JavaScript' },
    { path: 'icon3.png', name: 'HTML' },
    { path: 'icon4.png', name: 'CSS' },
    { path: 'icon5.png', name: 'Firebase' },
    { path: 'icon6.png', name: 'Git' },
    { path: 'icon7.png', name: 'Scrum' },
    { path: 'icon8.png', name: 'Rest-Api' },
    { path: 'icon9.png', name: 'Material Design' },
  ];
}
