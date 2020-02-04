import { Component, OnInit } from '@angular/core';
import { TriviaService, ITrivias } from '../Services/trivia.service';
import { IAllInfo, RestApiService } from '../Services/rest-api.service';
import { AuthService } from '../services/authentication/auth.service';
import { ToastController, NavController } from '@ionic/angular';


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

  constructor(public navc: NavController, public toastController: ToastController, public auth: AuthService, private quiz: TriviaService, public heroesService: RestApiService) {
    this.heroesService.GetAllHeroes().subscribe((hero) =>{
      console.log(hero);
      this.heroes = hero;
    })
    this.GetQuiz();
    this.Delete(event)
    this.Posting();
  }

  ngOnInit() {}

  GetQuiz() {
    this.quiz.GetTrivia().subscribe(( trivia => {
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
  }

  VorigePagina() {
    if (this.page >= 1){
      this.page--;
    }
    
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

  async Delete(id){ 
    if(this.gedelete == true){
      const toast = await this.toastController.create({
        message: "Deleted!",
        position: "bottom",
        duration: 2000
      });
      toast.present()
    }

    this.gedelete = true
    this.quiz.DeleteTrivia(id) 
  }
}