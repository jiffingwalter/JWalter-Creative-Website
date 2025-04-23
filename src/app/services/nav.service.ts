import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

interface NavItem {
  name: string | undefined,
  path: string | undefined
  children: Array<NavItem> | undefined
};

@Injectable({
  providedIn: 'root'
})
export class NavService {
  routes:Array<Route> = [];

  constructor(private router: Router) { 
    this.routes = this.router.config;
    console.log(this.routes);
    this.getNavList();
  }

  getNavList(){
    let navList: Array<NavItem> = [];
    for (let i in this.routes) {
        const element = this.routes[i];
        console.log(element);
    
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
  }
  
}
