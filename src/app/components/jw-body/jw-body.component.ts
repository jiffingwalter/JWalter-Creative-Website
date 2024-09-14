import { Component } from '@angular/core';
import { Commission } from '../../ts/CommissionClass';

@Component({
    selector: 'app-jw-body',
    standalone: true,
    imports: [],
    templateUrl: './jw-body.component.html',
    styleUrl: './jw-body.component.css',
})
export class JwBodyComponent {
    commission:Commission = new Commission('guy','a test commission',new Date('9/14/2024'));
}
