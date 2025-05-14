import { Component, Signal, computed, effect } from '@angular/core';
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
    navItemChildrenHovered:Array<NavItem> = [];
    subnavShowing:Boolean = false;
    route:Signal<string>;

    constructor(
        private navService:NavService
    ){
        this.route = computed(()=> this.navService.currentRoute());
        this.navItems = navService.navList;

        // Check if the current nav item has any children and anchor the subheader if so
        this.navItemChildren = computed(() => {
            return this.findChildren(this.route());
        });

        // Listen for route changes and clear the show variable for subnav
        effect(()=>{
            if (this.navService.routeChanged()) {
                this.subnavShowing = false;
                this.navItemChildrenHovered = [];
            }
        })
    }
    /** On mouseover, display the floating subheader with children for the path if there are any */
    showSubnav(path: string){
        if(this.route().split('/')[1] !== path){
            let children = this.findChildren(path);
            if (children.length > 0){
                this.navItemChildrenHovered = children;
                this.subnavShowing = true;
            }
        }
    }

    /** Search the nav array for the children of the given route path */
    findChildren(query: string){
        for(let item of this.navItems){
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
    
    /** Conditional to decide if we should keep hiding the subnav */
    shouldHideSubnav(){
        return (
            !this.subnavShowing || 
            this.navItemChildrenHovered.length === 0
        );
    }
}