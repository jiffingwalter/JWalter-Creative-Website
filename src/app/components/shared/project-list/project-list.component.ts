import { Component, Input } from '@angular/core';
import { ProjectItem } from '@classes/project-item.class';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  @Input() projectList:Array<ProjectItem> = [];
}
