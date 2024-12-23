import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-jw-header',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './jw-header.component.html',
    styleUrl: './jw-header.component.css',
})
export class JwHeaderComponent {}
