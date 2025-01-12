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

  constructor(private contextHandler: ContextHandlerService){

  }

  setTitle(title: String){
    this.focusedTab = title;
  }

  setContext(context:string){
    this.contextHandler.currentContext.set(context);
    console.log(this.contextHandler.currentContext());
  }
}
