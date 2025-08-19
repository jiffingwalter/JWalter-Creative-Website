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
  private useMock:boolean = environment.useMockData;

  async getGameProjects(): Promise<ProjectItem[]> {
    let resource = (this.useMock)? `./../../assets/data/json/mockGameProjectItems.json` : `${this.api}/v1/project-items/games/get`;
    return await firstValueFrom(
      this.http.get<ProjectItem[]>(resource)
    );
  }

  async getCodeProjects(): Promise<ProjectItem[]> {
    let resource = (this.useMock)? `./../../assets/data/json/mockCodeProjectItems.json` : `${this.api}/v1/projects/code/get`;
    return await firstValueFrom(
      this.http.get<ProjectItem[]>(resource)
    );
  }

  async getProjectById(idIn: string): Promise<ProjectItem> {
    if (this.useMock){
      var projectList = await this.getGameProjects();
        for (var item of projectList){
        if (item.id == idIn)
          return item;
        }
        return this.getEmptyProjectItem();
      } else {
        return await firstValueFrom(
          this.http.get<ProjectItem>(`${this.api}/v1/projects/all/get/${idIn}`)
        );
      }
  }

  getEmptyProjectItem(): ProjectItem {
      return new ProjectItem(
        "",
        "",
        "",
        "",
        "",
        "",
        [],
        new Date
      );
    }
}
