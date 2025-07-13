import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '@services/gallery.service';
import { GalleryItem } from '@classes/gallery-item.class';
import { MediaCarouselComponent } from "@components/shared/image-carousel/media-carousel.component";

@Component({
  selector: 'app-art-gallery-detail',
  standalone: true,
  imports: [
    DatePipe,
    MediaCarouselComponent
],
  templateUrl: './art-gallery-detail.component.html',
  styleUrl: './art-gallery-detail.component.css'
})
export class ArtGalleryDetailComponent {
  constructor(
    private galleryService:GalleryService,
    private activeRoute:ActivatedRoute
  ){}
  currentItem:GalleryItem | null = null;

  async ngOnInit(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) this.currentItem = await this.galleryService.getGalleryItemById(id);
  }
}
