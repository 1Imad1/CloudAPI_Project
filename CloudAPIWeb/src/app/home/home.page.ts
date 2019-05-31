import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.handleAuthentication();   
    
    console.log("Bearer " + this.auth.accessToken)
  }

  ngOnInit() {
  if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }
}
