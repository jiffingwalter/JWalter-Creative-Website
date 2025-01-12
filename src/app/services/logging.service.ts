import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message:any){
    console.log(message);
  }
  error(message:any){
    console.error(message);
  }
  warn(message:any){
    console.warn(message);
  }
}
