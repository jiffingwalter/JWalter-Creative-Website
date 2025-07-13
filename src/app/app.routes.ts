import { Routes } from '@angular/router';

/** Routes for navigation
 *  
 * Route types:
 *      'hidden': purely functional, and never displayed
 *      'primary': displays on the main nav bar all the time
 *      'secondary': displays on the main nav bar ONLY if the root of the url matches the currently selected parent route
*/
export const routes: Routes = [
    { path: '',
        title: "Welcome",
        loadComponent: () => import('./components/pages/landing/landing.component').then(m => m.LandingComponent),
        data: { type: 'hidden' } 
    },

    { path: 'home',
        title: "Home",
        loadComponent: () => import('./components/pages/home/home.component').then(m => m.HomeComponent),
        data: { type: 'primary' }
    },
    { path: 'art',
        title: "Art",
        loadComponent: () => import('./components/pages/art/art.component').then(m => m.ArtComponent),
        data: { type: 'primary' }
    },
    { path: 'art/gallery', 
        title: "Gallery", 
        loadComponent: () => import('./components/pages/art-gallery/art-gallery.component').then(m => m.ArtGalleryComponent),
        data: { type: 'secondary' }
    },
    { path: 'art/gallery/:id', 
        title: "Gallery Item", 
        loadComponent: () => import('./components/pages/art-gallery-detail/art-gallery-detail.component').then(m => m.ArtGalleryDetailComponent),
        data: { type: 'hidden' }
    },
    { path: 'art/avatar-creator', 
        title: "Avatar Creator", 
        loadComponent: () => import('./components/pages/art-avatarcreator/art-avatarcreator.component').then(m => m.ArtAvatarcreatorComponent),
        data: { type: 'secondary' }
    },
    { path: 'art/etsy', 
        title: "Etsy Shop", 
        loadComponent: () => import('./components/pages/art-etsy/art-etsy.component').then(m => m.ArtEtsyComponent),
        data: { type: 'secondary' }
    },
    { path: 'projects', 
        title: "Projects", 
        loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent),
        data: { type: 'primary' }
    },
    { path: 'projects/games',
        loadComponent: () => import('./components/pages/games/games.component').then(m => m.GamesComponent),
        title: "Games",
        data: { type: 'secondary' }
    },
    // { path: 'games/projects', 
        // title: "Game Projects", 
        // loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent),
        // data: { type: 'secondary' }
    // },
    // { path: 'games/devlog', 
        // title: "Game Devlog", 
        // loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent),
        // data: { type: 'secondary' }
    // },
    { path: 'projects/code',
        title: "Code",
        loadComponent: () => import('./components/pages/code/code.component').then(m => m.CodeComponent),
        data: { type: 'secondary' }
    },
    // { path: 'code/projects', 
        // title: "Code Projects", 
        // loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent),
        // data: { type: 'secondary' }
    // },
    // { path: 'code/blog', 
        // title: "Developer Blog", 
        // loadComponent: () => import('./components/pages/underconstruction/underconstruction.component').then(m => m.UnderconstructionComponent),
        // data: { type: 'secondary' }
    // },

    { path: '**',
        title: "Page not found :(",
        loadComponent: () => import('./components/pages/notfound/notfound.component').then(m => m.NotfoundComponent),
        pathMatch: 'full',
        data: { type: 'hidden' }
    }
];