import { Component, OnInit } from '@angular/core';
import { TriviaService, ITrivias } from '../Service/trivia.service';
import { IAllInfo, RestApiService } from '../Service/rest-api.service';
import { AuthService } from '../Auth/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-trivia-rest-api',
  templateUrl: './trivia-rest-api.page.html',
  styleUrls: ['./trivia-rest-api.page.scss'],
})
export class TriviaRestApiPage implements OnInit {

  trivias;  
  heroes:IAllInfo

  heroId:number;
  question:string = "";
  answer:string = "";

  page: number = 0;
  
  showAntwoord: boolean = false;
  score: number;

  gepost: boolean = false;
  gedelete: boolean = false;

  constructor(public toastController: ToastController, public auth: AuthService, private quiz: TriviaService, public heroesService: RestApiService) {

    this.heroesService.GetAllHeroes().subscribe((hero) =>{
      console.log(hero);
      this.heroes = hero;
    })

    this.GetQuiz();

    if(this.auth.isAuthenticated()){
      this.Posting();
      this.Delete(event);
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

  async Posting(){

    let res: ITrivias = {
      "heroID": this.heroId,
      "questions": this.question,
      "answer": this.answer
    }

    if(this.gepost == true){
      const toast = await this.toastController.create({
        message: "You just Posted, click 'volgende' to see your question",
        position: "bottom",
        duration: 2000
      });
      toast.present();

      this.heroId = 0;
      this.question = ""
      this.answer = ""
    }
    
    this.gepost = true;
    this.quiz.PostTrivia(res)
  }
  
  RightAnswer(){
    this.showAntwoord = true;
  }

  refresh(){
    this.showAntwoord = false;
  }

  Delete(id){ 
    this.quiz.DeleteTrivia(id)
    console.log("deleete")

    this.gedelete = true;  
  }
}
