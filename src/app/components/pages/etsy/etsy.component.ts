import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-etsy',
  standalone: true,
  imports: [],
  templateUrl: './etsy.component.html',
  styleUrl: './etsy.component.css'
})
export class EtsyComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Etsy');
  }
}
