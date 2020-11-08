import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TestService } from '../app.service';
import { Data, Option } from '../data.model'



@Component({
  selector: 'app-quiz-window',
  templateUrl: './quiz-window.component.html',
  styleUrls: ['./quiz-window.component.css']
})
export class QuizWindowComponent implements OnInit {
  timer:any = {
    min: 5,
    sec: 0
  }

  correct:number = 0;
  total: number = 10;
  

  hide:boolean=true;
  datas: Data[];
  checked: boolean = false;

  counter: number = 1;
  answerCounter: number = 0;
  options: Option = {
    A: "",
    B: "",
    C: "",
    D: ""
  }
  checkedAnswer: string[] = [];

  id: number;
  question: string;

  answer: string;


  constructor(private testService: TestService) {
    
   }


  ngOnInit(): void {
    this.startTimer();
    this.testService.loadData().subscribe(data => {
      this.datas = data;
      console.log(data)
      this.options = data[0].options

      this.id = data[0].id;
      this.question = data[0].question;

      this.answer = data[0].answer;
    
      

    })
  

  }
  checkAnswer(userObj) {
    if (this.checkedAnswer.length < 10) {
      this.checkedAnswer[this.answerCounter] = userObj.option;
      if(userObj.option == this.answer){
        this.correct +=1;
      }
      console.log(userObj.option);
      this.answerCounter += 1;
    }


    if (this.counter < 10) {

      this.id = this.datas[this.counter].id;
      this.options = this.datas[this.counter].options;
      this.question = this.datas[this.counter].question;
      this.answer = this.datas[this.counter].answer;

      this.counter += 1;
      console.log("conter :" + this.counter)
      console.log(this.checkedAnswer)
    } else {

      this.hide = false;
      console.log("end")
    }

    this.checked = false;



  }
  onChange() {

    this.checked = true;
  }


  startTimer() {
   

    let intervalId = setInterval(() => {
      if (this.timer.sec - 1 == -1) {
        this.timer.min -= 1;
        this.timer.sec = 59;
      } else{
         this.timer.sec -= 1;
        }
      if (this.timer.min === 0 && this.timer.sec == 0) {
        clearInterval(intervalId);
        this.hide = false;
        alert("You are out of time. Sorry!")

      }
    }, 1000)

}
  
}

