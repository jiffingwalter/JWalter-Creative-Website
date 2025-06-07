import { Component, computed, Signal } from '@angular/core';
import { JwHeaderComponent } from './components/shared/jw-header/jw-header.component';
import { JwBodyComponent } from './components/shared/jw-body/jw-body.component';
import { JwFooterComponent } from './components/shared/jw-footer/jw-footer.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { NavService } from '@services/nav.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        JwHeaderComponent,
        JwBodyComponent,
        JwFooterComponent,
        LandingComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'jwalter-creative-website';
    showLanding: Signal<boolean>;
    route: Signal<string>;
    
    // Get context from context handler
    constructor(
        private navService:NavService
    ){
        this.showLanding = computed(() => this.navService.currentRoute() == '/');
        this.route = computed(()=> this.navService.currentRoute());
    }

    
}