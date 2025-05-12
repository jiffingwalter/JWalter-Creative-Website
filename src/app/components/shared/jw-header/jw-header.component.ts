import { Component, Signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavService } from '@services/nav.service';
import { NavItem } from '@interfaces/nav-item.interface';

@Component({
    selector: 'app-jw-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './jw-header.component.html',
    styleUrl: './jw-header.component.css',
})
export class JwHeaderComponent {
    navItems:Array<NavItem>;
    navItemChildren:Signal<NavItem[]>;
    route:Signal<string>;

    constructor(
        private navService:NavService
    ){
        this.route = computed(()=> this.navService.currentRoute());
        this.navItems = navService.navList;

        // Check if the current nav item has any children and anchor the subheader if so
        this.navItemChildren = computed(() => {
            for(let item of this.navItems){
                let navRoot = this.route().split('/')[1];
                let routeMatches = (('/' + item.path) === this.route() || navRoot === item.path);
                if(
                    (routeMatches && 
                    item.children !== undefined && 
                    item.children.length > 0)
                ){
                    return item.children;
                }
            }
            return [];
        });
    }

    /** Search the nav array for the children of the given route path */
    findChildren(query: string){
        for(let item of this.navItems){
            let querySplit = query.split('/');
            let navRoot = query.split('/')[1] || query.split('/')[0];
            let pathMatches = (('/' + item.path) === query || navRoot === item.path);
            if(
                (pathMatches && 
                item.children !== undefined && 
                item.children.length > 0)
            ){
                return item.children;
            }
        }
        return [];
    }

    /** On mouseover, display the floating subheader with children if there are any */
    toggleSubheader(path: string){
        // check if its not the current route
        // check if there's any children
        if(this.route() !== path){

        }
        // get children and enable floating subheader
    }
}