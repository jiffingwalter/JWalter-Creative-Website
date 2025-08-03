import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItem } from '@classes/gallery-item.class';
import { firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private api = environment.api;
  private _imagePath:String = environment.imagePath;

  constructor(private http: HttpClient) {
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await firstValueFrom(
      //this.http.get<GalleryItem[]>('./../../assets/data/json/mockGalleryItems.json')
      this.http.get<GalleryItem[]>(`${this.api}/v1/gallery-item/get`)
    );
  }

  async getGalleryItemById(idIn: string){
    // MOCK
    //var galleryItemList = await this.getGalleryItems();
    //for (var item of galleryItemList){
    //  if (item.id == idIn)
    //    return item;
    //}
    //return null;

    // LIVE
    return await firstValueFrom(
      this.http.get<GalleryItem>(`${this.api}/v1/gallery-item/get/${idIn}`)
    );
  }

  get imagePath(){
    return this._imagePath;
  }
}
