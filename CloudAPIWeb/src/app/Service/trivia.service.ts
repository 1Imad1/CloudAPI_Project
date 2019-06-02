import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from '../Auth/auth.service'


@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  ApiUrl = "https://cloudapi-241723.appspot.com/api/trivia";
  //ApiUrl = "http://localhost:52869/api/trivia";
  Authorize;
  
  constructor(private http: HttpClient, private auth: AuthService) {
    this.Authorize = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.accessToken,
        'Content-Type': 'application/json'
      })
    }
  }

  GetTrivia(){
    return this.http.get<ITrivias>(this.ApiUrl, this.Authorize)
  }

  Paging(page){
    return this.http.get<ITrivias[]>(this.ApiUrl + "?page=" + page.toString(),this.Authorize);
  }

  PostTrivia(trivia:ITrivias){
    console.log("gepost")
    this.http.post(this.ApiUrl, trivia, this.Authorize).subscribe()
  }

  DeleteTrivia(id:number){
    console.log("gepost")
    this.http.delete(this.ApiUrl + "/" + id, this.Authorize).subscribe()
  }
}

export interface ITrivias {
  id?: number;
  heroID: number;
  questions: string;
  answer: string;
}