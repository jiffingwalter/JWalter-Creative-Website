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
      level: 'Knowledgeable',
      description: 'Built and refactored reactive and responsive webpages with vanilla HTML and CSS from scratch, as well as taking advantage of different front-end frameworks such as Bootstrap. Focusing on learning more foundations on accessible webpage design.'
    },
    {
      label: 'JavaScript',
      level: 'Knowledgeable',
      description: 'Leveraged vanilla JavaScript for building interactive functionality into enterprise-level webpages and webapps, building and utilizing APIs, as well as for personal projects.'
    },
    {
      label: 'TypeScript',
      level: 'Developing',
      description: 'Leveraged TypeScript for backend controllers of enterprise-level webapps and this personal website.'
    },
    {
      label: 'Angular 2+',
      level: 'Developing',
      description: 'Worked within in an enterprise-level webapp utilizing Angular in the middle of migrating from AngularJS. Built multiple small projects with intention on becoming fluent in Angular.'
    },
    {
      label: 'AngularJS',
      level: 'Knowledgeable',
      description: 'Worked with AngularJS functionality both on an enterprise webapp and within the ServiceNow service portal. Assisted in migrating pieces of webapp built in AngularJS to Angular2+.'
    },
    {
      label: 'ServiceNow',
      level: 'Knowledgeable',
      description: 'Assisted in the development of a custom-built webapp frontend using the ServiceNow service portal, and leveraging core SerivceNow functionality for backend.'
    },
    {
      label: 'Java & SpringBoot',
      level: 'Developing',
      description: 'Worked within multiple enterprise-level applications utilizing Java and Springboot backend. Used Java and built basic API endpoints with Spring for personal use cases.'
    },
    {
      label: 'SQL',
      level: 'Developing',
      description: 'Familiar with crafting SQL queries for basic use cases and have utilized platforms such as Snowflake and dbt in an enterprise environment.'
    },
  ];
  selectedSkill: SkillItem = this.skills[0];
  isAnySkillSelected: boolean = false;
  showAllSkills: boolean = false;

  selectSkill(input: number) {
    let clickedSkill = this.skills[input];
    if (this.isAnySkillSelected === true && clickedSkill.label === this.selectedSkill?.label)
      this.isAnySkillSelected = false;
    else
      this.isAnySkillSelected = true;

    this.selectedSkill = clickedSkill;
  }

  showSkill(label: string){
    return ((this.isAnySkillSelected && label === this.selectedSkill.label) || this.showAllSkills);
  }

  toggleShowAllSkills(){
    if (!this.showAllSkills)
      this.isAnySkillSelected = false;
    
    return this.showAllSkills = !this.showAllSkills;
  }
}
