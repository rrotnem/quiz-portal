import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizWindowComponent } from './quiz-window/quiz-window.component';

const routes: Routes = [
  {path: "quizwindow", component: QuizWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
