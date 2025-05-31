import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryItem } from '@interfaces/gallery-item.interface';
import { firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private api = environment.api;

  constructor(private http: HttpClient) {
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await firstValueFrom(
      this.http.get<GalleryItem[]>(this.api + '/v1/get-gallery-items')
    );
  }
}
