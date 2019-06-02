import { Component, OnInit } from '@angular/core';
import { RestApiService, IAllInfo, Images, Biography, Result} from '../Service/rest-api.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  heroes:IAllInfo;
  hero:IAllInfo
  bioghrapy:Biography;

  result: Result;
  image:Images;

  interval:any
  cancelInterval:any;
  
  search:any;
  id:any;
  ResultHeroes:any;

  constructor(public route: Router, public navctrl: NavController, public heroesService: RestApiService) {

    this.heroesService.GetAllHeroes().subscribe((test =>{
      this.heroes = test

      this.interval = setInterval(()=> { this.heroes, this.Searching(""), this.SearchById(), this.image },1000); 
      this.cancelInterval = setInterval(()=> {clearInterval(this.interval); clearInterval(this.cancelInterval) },1000); 
    }), err => console.log(err.message))
    

  }  

  ngOnInit() {
  }

  Searching(search){    
    this.heroesService.Search(search).subscribe(success=>{
      this.result = success;
      this.ResultHeroes = this.result.results
      console.log(search)

      this.ResultHeroes.forEach(res => {
        this.heroesService.GetSingleHero(res.id).subscribe((singleHero =>{
          this.hero = singleHero
        
        }),err => console.log(err.message))

        
        this.heroesService.GetImage(res.id).subscribe((img => {
          this.image = img
        }))

      }),err => console.log(err.message)
    })
  }

  SearchById(){    
    this.heroesService.GetSingleHero(this.id).subscribe(success=>{
      this.hero = success;

      this.heroesService.GetImage(this.id).subscribe((img => {
          this.image = img
      }),err => console.log(err.message))
    })
  }

  goSingleHero(id: number) {
    this.interval = setInterval(()=> { this.navctrl.navigateForward("info/"+ id), this.image },1000); 
    this.cancelInterval = setInterval(()=> {clearInterval(this.interval); clearInterval(this.cancelInterval) },1000)
  }
}
