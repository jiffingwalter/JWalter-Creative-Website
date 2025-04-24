import { Component } from '@angular/core';
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
    navItems:Array<NavItem> = [];
    constructor(
        private navService:NavService
    ){
        this.navItems = navService.navList;
    }
}