import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-art-gallery',
  standalone: true,
  imports: [],
  templateUrl: './art-gallery.component.html',
  styleUrl: './art-gallery.component.css'
})
export class ArtGalleryComponent {
  constructor(private http: HttpClient){
    this.testAPI();
  }

  async testAPI(){
    this.http.get('http://localhost:8080/api/v1/get-gallery-items').subscribe(response => {
      console.log(response);
    })
  }
}
