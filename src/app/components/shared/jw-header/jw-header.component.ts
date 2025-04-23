import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navListExport, NavItem } from '../../../app.routes';
import { NavService } from '@services/nav.service';

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
    navItem:NavItem[] = [];
    constructor(){
        this.navItem = navListExport;
    }
}