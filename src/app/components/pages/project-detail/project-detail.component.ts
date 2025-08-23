import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectItem } from '@classes/project-item.class';
import { MediaCarouselComponent } from "@components/shared/media-carousel/media-carousel.component";
import { ProjectService } from '@services/project.service';
import { GalleryService } from '@services/gallery.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MediaCarouselComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  constructor(
    private projectService:ProjectService,
    private activeRoute:ActivatedRoute,
    private galleryService:GalleryService
  ){}
  currentItem:ProjectItem | null = null;
  imagePath:String = this.galleryService.getImagePath();
  tab:String = "overview";

  async ngOnInit(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) this.currentItem = await this.projectService.getProjectById(id);
  }

  isTabActive(tabIn:String): boolean{
    return (this.tab == tabIn);
  }
}
