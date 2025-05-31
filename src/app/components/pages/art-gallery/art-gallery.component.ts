import { DatePipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryItem } from '@interfaces/gallery-item.interface';
import { GalleryService } from '@services/gallery.service';

@Component({
  selector: 'app-art-gallery',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './art-gallery.component.html',
  styleUrl: './art-gallery.component.css'
})
export class ArtGalleryComponent {
  galleryItemList:Array<GalleryItem> = [];
  displayedGalleryItems:Array<GalleryItem> = [];

  constructor(private galleryService: GalleryService) {
  }

  async ngOnInit(){
    try{
      this.galleryItemList = await this.galleryService.getGalleryItems();
      this.displayedGalleryItems = this.galleryItemList;
    } catch (error){
      console.error(`Couldn't fetch gallery items: `,error);
    }
  }
}
