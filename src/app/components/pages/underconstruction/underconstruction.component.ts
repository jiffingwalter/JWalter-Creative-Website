import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-underconstruction',
  standalone: true,
  imports: [],
  templateUrl: './underconstruction.component.html',
  styleUrl: './underconstruction.component.css'
})
export class UnderconstructionComponent {
  constructor(
    private titleService:Title
  ){
    titleService.setTitle('Under construction');
  }
}
