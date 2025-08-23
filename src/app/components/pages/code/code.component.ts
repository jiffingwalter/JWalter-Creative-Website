import { Component } from '@angular/core';
import { ProjectItem } from '@classes/project-item.class';
import { ProjectListComponent } from "@components/shared/project-list/project-list.component";
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  constructor(private projectService: ProjectService){}
  codeProjectList:Array<ProjectItem> = [];

  async ngOnInit(){
    try{
      var response = await this.projectService.getCodeProjects();
      this.codeProjectList = response;
    } catch (error){
      console.error(`Couldn't fetch game project list: `,error);
    }
  }
}
