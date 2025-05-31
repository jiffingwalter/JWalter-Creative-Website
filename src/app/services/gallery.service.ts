import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItem } from '@interfaces/gallery-item.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await firstValueFrom(
      this.http.get<GalleryItem[]>('http://localhost:8080/api/v1/get-gallery-items')
    );
  }
}
