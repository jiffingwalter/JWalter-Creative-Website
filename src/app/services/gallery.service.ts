import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItem } from '@classes/gallery-item.class';
import { firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}
  
  private api = environment.api;
  private imagePath:String = environment.imagePath;
  private useMock:boolean = environment.useMockData;


  async getGalleryItems(): Promise<GalleryItem[]> {
    let resource = (this.useMock)? `./../../assets/data/json/mockGalleryItems.json` : `${this.api}/v1/gallery-item/get`;
    return await firstValueFrom(
      this.http.get<GalleryItem[]>(resource)
    );
  }

  async getGalleryItemById(idIn: string): Promise<GalleryItem | null>{
    if (this.useMock){
      var galleryItemList = await this.getGalleryItems();
      for (var item of galleryItemList){
      if (item.id == idIn)
        return item;
      }
      return null;
    } else {
      return await firstValueFrom(
        this.http.get<GalleryItem | null>(`${this.api}/v1/gallery-item/get/${idIn}`)
      );
    }
  }

  getImagePath():String {
    return this.imagePath;
  }

  getEmptyGalleryItem(): GalleryItem {
    return new GalleryItem(
      "",
      "",
      "",
      [],
      [],
      new Date,
      new Date
    );
  }
}
