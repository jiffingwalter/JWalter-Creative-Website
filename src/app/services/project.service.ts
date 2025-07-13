import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectItem } from '@classes/project-item.class';
import { firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  private api = environment.api;

  async getGameProjects(): Promise<ProjectItem[]> {
    return await firstValueFrom(
      this.http.get<ProjectItem[]>('./../../assets/data/json/mockGameProjectItems.json')
      //this.http.get<ProjectItem[]>(`${this.api}/v1/get-game-projects`)
    );
  }

  async getProjectById(idIn: string) {
    // MOCK
    var projectList = await this.getGameProjects();
    for (var item of projectList) {
      if (item.id == idIn)
        return item;
    }
    return null;
    // LIVE
    //return await firstValueFrom(
    //  //this.http.get<ProjectItem[]>(`${this.api}/v1/get-game-projects/${idIn}`)
    //);
  }
}
