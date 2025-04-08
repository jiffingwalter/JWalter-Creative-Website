import { Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { EtsyComponent } from './components/pages/etsy/etsy.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [
    {path: '', component: LandingComponent, title: "Welcome"},
    {path: 'home', component: HomeComponent, title: "Home"},
    {path: 'gallery', component: GalleryComponent, title: "Gallery"},
    {path: 'projects', component: ProjectsComponent, title: "Projects"},
    {path: 'etsy', component: EtsyComponent, title: "Etsy"},
    {path: '**', component: NotfoundComponent, pathMatch: 'full', title: "Page not found :("}
];
