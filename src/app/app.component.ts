import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isStart: boolean = true;
  title = 'quiz-portal';
  constructor(){
    

  } 
  goBack(): void {   


    this.isStart = true;
 

  }
  start() {
    this.isStart = false;
  }
  // ngDoCheck(){console.log("ngDoCheck")}
  // ngAfterContentInit(){console.log("ngAfterContenInit")}
  // ngAfterContentChecked(){
  //   console.log("nfAfterContentChecked");
    
  // }
  // ngAfterViewChecked(){console.log("ngAfterViewChecked")}

}
