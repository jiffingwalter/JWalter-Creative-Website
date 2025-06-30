import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '@services/gallery.service';
import { GalleryItem } from '@classes/gallery-item.class';

@Component({
  selector: 'app-art-gallery-detail',
  standalone: true,
  imports: [
    DatePipe
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
  currentSlide:number = 0;
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

  slideLeft(){
    if (this.isMoveValid(-1)){
      this.currentSlide--;
      return true;
    }else
      return false;
  }

  slideRight(){
    if (this.isMoveValid(1)){
      this.currentSlide++;
      return true;
    }else
      return false;
  }

  isMoveValid(move:number){
    if (this.currentItem){
      let movedSlide = this.currentSlide + move;
      return (
        movedSlide >= 0 &&
        movedSlide < this.currentItem.content.length
      );
    } else
      return false;
  }
}
