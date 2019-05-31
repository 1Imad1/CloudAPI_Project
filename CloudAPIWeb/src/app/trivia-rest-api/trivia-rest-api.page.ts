import { Component, OnInit } from '@angular/core';
import { TriviaService, ITrivias } from '../Service/trivia.service';
import { IAllInfo, RestApiService } from '../Service/rest-api.service';
import { AuthService } from '../Auth/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-trivia-rest-api',
  templateUrl: './trivia-rest-api.page.html',
  styleUrls: ['./trivia-rest-api.page.scss'],
})
export class TriviaRestApiPage implements OnInit {

  trivias;  
  heroes:IAllInfo

  heroId:number = 0;
  question:string = "";
  answer:string = "";
  
  triviass: ITrivias[];
  page: number = 0;

  showAntwoord: boolean = false;
  score: number;

  constructor(public alertController: AlertController, public auth: AuthService, private quiz: TriviaService, public heroesService: RestApiService) {

    this.heroesService.GetAllHeroes().subscribe((hero) =>{
      console.log(hero);
      this.heroes = hero;
    })

    this.GetQuiz();

    if(this.auth.isAuthenticated()){
      this.Posting()
    }
  }

  ngOnInit() {

  }

  GetQuiz() {
    this.quiz.GetTrivia().subscribe(( trivia => {
      console.log(trivia)
      this.trivias = trivia
    }))
  }

  VolgendePagina() {
    this.page++;
    this.quiz.Paging(this.page).subscribe(success => {
      this.trivias = success;
    });
    
    var interval = setInterval(()=> {this.showAntwoord = false },400); 
    var cancel = setInterval(()=> {clearInterval(interval); clearInterval(cancel) },2000); 
    console.log(this.page)
  }

  VorigePagina() {
    if (this.page >= 1)
      this.page--;
    this.quiz.Paging(this.page).subscribe(success => {
      this.trivias = success;
    });
    
    var interval = setInterval(()=> {this.showAntwoord = false },300); 
    var cancel = setInterval(()=> {clearInterval(interval); clearInterval(cancel) },2000); 
    
  }

  Posting(){
    let res: ITrivias = {
      "heroID": this.heroId,
      "questions": this.question,
      "answer": this.answer
    }

    this.quiz.PostTrivia(res)
    console.log(res)
  }
  
  RightAnswer(){
    this.showAntwoord = true;
  }

  refresh(){
    this.showAntwoord = false;
  }

  Delete(id){
    this.quiz.DeleteTrivia(id)
    console.log("delete")
  }
}
