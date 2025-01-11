import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextHandlerService {
  constructor(){
    // would read cookie here and return user's context if they've set it before?
  }
  currentContext = signal<string>('landing'); // would get this from cookies later?
}
