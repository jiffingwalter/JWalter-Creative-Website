import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { UnderconstructionComponent } from './components/pages/underconstruction/underconstruction.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ArtComponent } from './components/pages/art/art.component';
import { GamesComponent } from './components/pages/games/games.component';
import { CodeComponent } from './components/pages/code/code.component';

/* TODO: set these all up for lazy loading */
export const routes:Routes = [
    {path: '', component: LandingComponent, title: "Welcome", data: {showNav: false}},

    {path: 'home', component: HomeComponent, title: "Home", data: {showNav: true}},
    {path: 'art', component: ArtComponent, title: "Art", data: {showNav: true}, children:[
        {path: 'gallery', title: "Gallery", component: UnderconstructionComponent},
        {path: 'avatar-creator', title: "Avatar Creator", component: UnderconstructionComponent}
    ]},
    {path: 'games', component: GamesComponent, title: "Games", data: {showNav: true}},
    {path: 'code', component: CodeComponent, title: "Code", data: {showNav: true}},

    {path: '**', component: NotfoundComponent, pathMatch: 'full', title: "Page not found :(", data: {showNav: false}}
];

// Get nav buttons out of the router elements 
export interface NavItem{
    name: string|undefined,
    path: string|undefined
};

let navList:Array<NavItem> = [];
for (let i in routes){
    const element = routes[i];
    if (element.data && element.data['showNav'] === true){
        const nav:NavItem = {
            name: element.title?.toString(),
            path: element.path?.toString()
        }
        navList.push(nav);
    }
}

export const navListExport:Array<NavItem> = navList;