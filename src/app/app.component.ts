import { Component, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
    showLanding: Signal<boolean>;
    context: Signal<string>;
    
    // Get context from context handler
    constructor(
        private contextService: ContextHandlerService,
        private currentRoute: ActivatedRoute
    ){
        this.showLanding = computed(() => this.contextService.currentContext() == 'landing');
        this.context = computed(()=> this.contextService.currentContext());
        console.log(this.currentRoute.toString());
    }

    
}