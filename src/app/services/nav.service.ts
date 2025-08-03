import { Injectable, signal, effect } from '@angular/core';
import { Router, Route, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'
import { NavItem } from '@interfaces/nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  readonly routes: Array<Route> = [];
  readonly navList: Array<NavItem> = [];
  readonly currentRoute = signal<string>('');
  readonly routeChanged = signal<boolean>(true);

  constructor(
    private router: Router,
  ) {
    this.routes = this.router.config;
    
    /** Retrieve current route and assign it to a signal */
    this.currentRoute.set(this.router.url);
    this.router.events.subscribe(() => {
      this.currentRoute.set(this.router.url);
    });

    /** Retrieve all primary nav items from the Router */
    for (let element of this.routes) {
      if (element.title && element.path && element.data && element.data['type'] === 'primary') {
        const newItem: NavItem = {
          name: element.title.toString(),
          path: element.path.toString(),
          children: []
        }
        this.navList.push(newItem);
      }
    }
    /** Retrieve all secondary nav items from the Router and assign them to their primaries by root path */
    for (let element of this.routes){
      if (element.data && element.data['type'] === 'secondary'){
        let root = element.path?.split('/')[0];

        for(let item of this.navList){
          if(element.title && element.path && root === item.path){
            const newItem: NavItem = {
              name: element.title.toString(),
              path: element.path.toString(),
              children: []
            }
            item.children.push(newItem);
          }
        }
      }
    }

    /** Create listener for whenever the route changes in the application */
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.routeChanged.set(true);
      queueMicrotask(()=> this.routeChanged.set(false));
    })
  }
}
