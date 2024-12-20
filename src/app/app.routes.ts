import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { EtsyComponent } from './components/pages/etsy/etsy.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'etsy', component: EtsyComponent},
    {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];
