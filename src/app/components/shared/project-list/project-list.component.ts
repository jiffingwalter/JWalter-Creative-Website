import { Component, Input } from '@angular/core';
import { ProjectItem } from '@classes/project-item.class';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  @Input() projectList:Array<ProjectItem> = [];
}
