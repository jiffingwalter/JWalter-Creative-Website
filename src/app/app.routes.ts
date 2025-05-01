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