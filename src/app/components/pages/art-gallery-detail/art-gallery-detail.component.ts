import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '@services/gallery.service';
import { GalleryItem } from '@classes/gallery-item.class';

@Component({
  selector: 'app-art-gallery-detail',
  standalone: true,
  imports: [],
  templateUrl: './art-gallery-detail.component.html',
  styleUrl: './art-gallery-detail.component.css'
})
export class ArtGalleryDetailComponent {
  constructor(
    private galleryService:GalleryService,
    private activeRoute:ActivatedRoute
  ){}
  currentItem:GalleryItem | null = null;
  mediaExpanded:Boolean = false;
  @ViewChild('mediaContainer') mediaContainerElement!: ElementRef<HTMLElement>;

  async ngOnInit(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) this.currentItem = await this.galleryService.getGalleryItemById(id);
  }

  toggleMediaExpanded(){
    this.mediaExpanded = !this.mediaExpanded;
    this.mediaContainerElement.nativeElement.scrollIntoView();
  }
}
