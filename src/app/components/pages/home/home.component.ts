import { Component } from '@angular/core';
import { SkillItem } from '@interfaces/skill-item.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
  }
  skills: Array<SkillItem> = [
    {
      label: 'HTML/CSS',
      level: 'Intermediate',
      description: 'html css experience'
    },
    {
      label: 'JavaScript',
      level: 'Intermediate',
      description: 'javascript experience'
    },
    {
      label: 'TypeScript',
      level: 'Intermediate',
      description: 'typescript experience'
    },
    {
      label: 'Angular 2+',
      level: 'Intermediate',
      description: 'angular2 experience'
    },
    {
      label: 'AngularJS',
      level: 'Intermediate',
      description: 'angularjs experience'
    },
    {
      label: 'ServiceNow',
      level: 'Intermediate',
      description: 'servicenow experience'
    },
    {
      label: 'Java & SpringBoot',
      level: 'Beginner',
      description: 'java & springboot experience'
    },
    {
      label: 'SQL',
      level: 'Beginner',
      description: 'sql experience (raw sql, postgres, snowflake)'
    },
  ];
  selectedSkill: SkillItem = this.skills[0];
  isSkillSelected: boolean = true;

  selectSkill(input: number) {
    let clickedSkill = this.skills[input];
    if (this.isSkillSelected === true && clickedSkill.label === this.selectedSkill?.label)
      this.isSkillSelected = false;
    else
      this.isSkillSelected = true;

    this.selectedSkill = clickedSkill;
  }
}
