import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-jw-header',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './jw-header.component.html',
    styleUrl: './jw-header.component.css',
})
export class JwHeaderComponent {}
