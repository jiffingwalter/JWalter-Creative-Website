import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { NavItem } from '@interfaces/nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  routes: Array<Route> = [];
  navList: Array<NavItem> = [];

  constructor(private router: Router) {
    this.routes = this.router.config;
    for (let i in this.routes) {
      const element = this.routes[i];
      console.log(element);

      if (element.data && element.data['showNav'] === true) {
        let navChildren: Array<NavItem> = [];

        if (element.children) {
          for (let i: number = 0; i < element.children?.length; i++) {
            const child: NavItem = {
              name: element.children[i].title?.toString(),
              path: element.children[i].path?.toString(),
              children: undefined
            }
            navChildren.push(child);
          }
        }

        const nav: NavItem = {
          name: element.title?.toString(),
          path: element.path?.toString(),
          children: navChildren
        }
        this.navList.push(nav);
      }
    }
  }
}
