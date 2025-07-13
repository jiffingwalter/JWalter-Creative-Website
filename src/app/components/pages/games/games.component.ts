import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectItem } from '@classes/project-item.class';
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  constructor(private projectService: ProjectService){}
  gameProjectList:Array<ProjectItem> = [];

  async ngOnInit(){
    try{
      var response = await this.projectService.getGameProjects();
      this.gameProjectList = response;
    } catch (error){
      console.error(`Couldn't fetch game project list: `,error);
    }
  }
}
