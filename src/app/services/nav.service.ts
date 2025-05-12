import { Injectable, signal } from '@angular/core';
import { Router, Route } from '@angular/router';
import { NavItem } from '@interfaces/nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  routes: Array<Route> = [];
  navList: Array<NavItem> = [];
  currentRoute = signal<string>('');

  constructor(private router: Router) {
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
  }
}
