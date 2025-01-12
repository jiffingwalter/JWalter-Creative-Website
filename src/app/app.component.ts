import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { JwHeaderComponent } from './components/shared/jw-header/jw-header.component';
import { JwBodyComponent } from './components/shared/jw-body/jw-body.component';
import { JwFooterComponent } from './components/shared/jw-footer/jw-footer.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ContextHandlerService } from './services/context-handler.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        //RouterOutlet,
        JwHeaderComponent,
        JwBodyComponent,
        JwFooterComponent,
        LandingComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'Angular-Sandbox';
    showLanding:Boolean = true;
    
    // Get context from context handler
    constructor(
        private context:ContextHandlerService
    ){
        this.showLanding = this.context.currentContext() == 'landing';
        console.log(this.context.currentContext());
    }
}