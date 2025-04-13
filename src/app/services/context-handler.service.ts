import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ContextHandlerService {
  currentRoute = signal<string>('');

  constructor(
      private logService: LoggingService,
      private router: Router
    ) {
      this.currentRoute.set(this.router.url);
      this.router.events.subscribe(() => {
        this.currentRoute.set(this.router.url);
      });
    }
}
