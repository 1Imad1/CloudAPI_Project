import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TokenID: string;
  private TokenAccess: string;
  private Expire: number;
  userProfile: any;

  isLoggedIn: Boolean = false;
  auth0 = new auth0.WebAuth({
    clientID: 'zQO2HnUjaJ3k51b5uUhicrRz4iuKpRmW',
    domain: 'dev-pammmwvh.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:8100/', 
    audience: 'http://localhost:52869/', 
    scope: 'openid profile email'
  });
  

  constructor(public router: Router){

    this.TokenID = ''
    this.TokenAccess = ''
    this.Expire = 0
  }

  get accessToken() :string{
    return this.TokenAccess;
  }

  get IDToken(): string{
    return this.TokenID;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
        this.router.navigate(["/tabs/home"])
      } else if (err) {
        console.log(err);
      }
    });
    console.log(this.auth0)
  }

  private localLogin(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this.TokenAccess = authResult.accessToken;
    this.TokenID = authResult.idToken;
    this.Expire = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.TokenAccess = '';
    this.TokenID = '';
    this.Expire = 0;
    
    this.auth0.logout({
      returnTo: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.TokenAccess && Date.now() < this.Expire;
  }

  public getProfile(cb):void{
    localStorage.getItem(this.TokenAccess);

    if(!this.TokenAccess){
      throw new Error('Access Token must exist to fetch profile');
    }

    this.auth0.client.userInfo(this.TokenAccess, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}
