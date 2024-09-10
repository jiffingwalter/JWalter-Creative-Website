import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JwHeaderComponent } from "./components/jw-header/jw-header.component";
import { JwBodyComponent } from "./components/jw-body/jw-body.component";
import { JwFooterComponent } from "./components/jw-footer/jw-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JwHeaderComponent, JwBodyComponent, JwFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Sandbox';
}
