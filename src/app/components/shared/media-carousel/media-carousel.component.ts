import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Media } from '@classes/media.class';
import { GalleryService } from '@services/gallery.service';

@Component({
  selector: 'app-media-carousel',
  standalone: true,
  imports: [],
  templateUrl: './media-carousel.component.html',
  styleUrl: './media-carousel.component.css'
})
export class MediaCarouselComponent {
  constructor(private galleryService:GalleryService){}
  
  @Input() mediaArray:Array<Media> = [];
  currentSlide:number = 0;
  mediaExpanded:Boolean = false;
  imagePath:String = this.galleryService.imagePath;
  @ViewChild('mediaContainer') mediaContainerElement!: ElementRef<HTMLElement>;

  toggleMediaExpanded() {
    this.mediaExpanded = !this.mediaExpanded;
    this.mediaContainerElement.nativeElement.scrollIntoView();
  }

  slideLeft() {
    if (this.isMoveValid(-1)) {
      this.currentSlide--;
      return true;
    } else
      return false;
  }

  slideRight() {
    if (this.isMoveValid(1)) {
      this.currentSlide++;
      return true;
    } else
      return false;
  }

  isMoveValid(move: number) {
    if (this.mediaArray) {
      let movedSlide = this.currentSlide + move;
      return (
        movedSlide >= 0 &&
        movedSlide < this.mediaArray.length
      );
    } else
      return false;
  }
}
