import { Component, OnInit } from '@angular/core';
import { Biography, RestApiService, IAllInfo } from '../Service/rest-api.service';
import {AuthService} from '../Auth/auth.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  bioghrapy:Biography;
  heroes:IAllInfo[]
  
  profile:any;
  
  constructor(private auth: AuthService, public heroesService: RestApiService) { 
    this.heroesService.GetAllHeroes().subscribe((hero) =>{
      console.log(hero);
      this.heroes = hero;
    })
    auth.handleAuthentication();

    localStorage.getItem(this.profile)

    console.log("id token =" + this.auth.IDToken)
    
    console.log("Bearer =" + this.auth.accessToken)
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }

    if(this.auth.userProfile){
      this.profile = this.auth.userProfile
    }else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}
