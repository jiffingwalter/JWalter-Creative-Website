import { Component } from '@angular/core';
import { ContextHandlerService } from './../../../services/context-handler.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  focusedTab:String = '';
  mousedTab:String = '';
  displayedTab:String = '';

  constructor(private contextHandler: ContextHandlerService){

  }
  setTitle(title:String,origin:String){
    // make this intelligent
    this.mousedTab = title;
    this.focusedTab = title;
    this.displayedTab = title;
  }
  unsetTitle(){
    this.focusedTab = '';
    this.mousedTab = '';
    this.displayedTab = '';
  }
  selectContext(context:string){
    this.contextHandler.currentContext.set(context.toLowerCase());
  }
}
