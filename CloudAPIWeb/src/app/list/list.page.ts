import { Component, OnInit } from '@angular/core';
import { RestApiService, IAllInfo, Images, Biography, Result } from '../Service/rest-api.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  heroes:IAllInfo[];

  images:Images;
  hero:IAllInfo
  bioghrapy:Biography;
  filterarray: any = []

  result: Result;
  search:IAllInfo;

  constructor(public route: Router, public navctrl: NavController, public heroesService: RestApiService) {

    this.heroesService.GetAllHeroes().subscribe((test =>{
      this.heroes = test
    }))
    this.Searching("")
  }

  ngOnInit() {
  }

  Searching(search){    
    this.heroesService.Search(search).subscribe(success=>{
      this.result = success;

      this.result.results.forEach(res => {
        this.heroesService.GetSingleHero(res.id).subscribe((singleHero =>{
          this.hero = singleHero
        }))
      })
    })
  }

  goSingleHero(id: number) {
    this.navctrl.navigateForward("info/"+ id)
  }
}
