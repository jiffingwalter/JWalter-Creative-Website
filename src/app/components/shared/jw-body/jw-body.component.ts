import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Commission } from '../../../ts/CommissionClass';

@Component({
    selector: 'app-jw-body',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './jw-body.component.html',
    styleUrl: './jw-body.component.css',
})
export class JwBodyComponent {
    
}
