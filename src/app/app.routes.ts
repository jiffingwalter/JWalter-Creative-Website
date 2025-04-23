import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',
        loadComponent: () => import('./components/pages/landing/landing.component').then(m => m.LandingComponent),
        title: "Welcome",
        data: { showNav: false } },

    { path: 'home',
        loadComponent: () => import('./components/pages/home/home.component').then(m => m.HomeComponent),
        title: "Home",
        data: { showNav: true }
    },
    { path: 'art',
        loadComponent: () => import('./components/pages/art/art.component').then(m => m.ArtComponent),
        title: "Art",
        data: { showNav: true },
        children: [
            { path: 'gallery', title: "Gallery", loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent) },
            { path: 'avatar-creator', title: "Avatar Creator", loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent) }
        ]
    },
    { path: 'games',
        loadComponent: () => import('./components/pages/games/games.component').then(m => m.GamesComponent),
        title: "Games",
        data: { showNav: true }
    },
    { path: 'code',
        loadComponent: () => import('./components/pages/code/code.component').then(m => m.CodeComponent),
        title: "Code",
        data: { showNav: true }
    },

    { path: '**',
        loadComponent: () => import('./components/pages/notfound/notfound.component').then(m => m.NotfoundComponent),
        pathMatch: 'full',
        title: "Page not found :(",
        data: { showNav: false }
    }
];

// Get nav buttons out of the router elements 
export interface NavItem {
    name: string | undefined,
    path: string | undefined
    children: Array<NavItem> | undefined
};
let navList: Array<NavItem> = [];
for (let i in routes) {
    const element = routes[i];

    if (element.data && element.data['showNav'] === true) {
        let navChildren: Array<NavItem> = [];
        
        if (element.children){
            for (let i:number = 0; i < element.children?.length; i++){
                const child:NavItem ={
                    name: element.children[i].title?.toString(),
                    path: element.children[i].path?.toString(),
                    children: undefined
                }
                navChildren.push(child);
            }
        }

        const nav:NavItem = {
            name: element.title?.toString(),
            path: element.path?.toString(),
            children: navChildren
        }
        navList.push(nav);
    }
}
export const navListExport: Array<NavItem> = navList;