import { Component, Signal, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavService } from '@services/nav.service';
import { NavItem } from '@interfaces/nav-item.interface';

@Component({
    selector: 'app-jw-header',
    standalone: true,
    imports: [
        CommonModule,
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
}