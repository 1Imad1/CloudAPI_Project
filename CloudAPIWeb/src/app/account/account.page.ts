import { Component, OnInit } from '@angular/core';
import { Biography, RestApiService, IAllInfo } from '../Service/rest-api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  bioghrapy:Biography;
  heroes:IAllInfo[]
  constructor(public heroesService: RestApiService) { 
    this.heroesService.GetAllHeroes().subscribe((hero) =>{
      console.log(hero);
      this.heroes = hero;
    })
    
    
    this.heroesService.GetBiography(1).subscribe((bio) =>{
      console.log(bio);
      this.bioghrapy = bio;
    })
  }

  ngOnInit() {
  }

}
