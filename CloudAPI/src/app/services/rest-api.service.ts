import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(public http: HttpClient) {}

  GetAllHeroes(){
    return this.http.get<IAllInfo>("https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json")
  }

  Search(name: string){
    return this.http.get<Result>(`https://www.superheroapi.com/api.php/2626457550914023/search/${name}`)
  }

  GetSingleHero(id:number){
    return this.http.get<IAllInfo>("https://www.superheroapi.com/api.php/2626457550914023/" + id)
  }

  GetAppearance(id:number){
    return this.http.get<Appearance>("https://www.superheroapi.com/api.php/2626457550914023/" + id + "/appearance")
  }

  GetImage(id:number){
    return this.http.get<Images>("https://www.superheroapi.com/api.php/2626457550914023/" + id + "/image")
  }

  GetWork(id:number){
    return this.http.get<Work>("https://www.superheroapi.com/api.php/2626457550914023/" + id + "/work")
  }

  GetConnection(id:number){
    return this.http.get<Connections>(`https://www.superheroapi.com/api.php/2626457550914023/${id}/connections`)
  } 

  GetBiography(id:number){
    return this.http.get<Biography>(`https://www.superheroapi.com/api.php/2626457550914023/${id}/biography`)
  }
}

export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface Biography {
  'full-name': string;
  'alter-egos': string;
  aliases: string[];
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  'group-affiliation': string;
  relatives: string;
}

export interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface IAllInfo {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

export interface Result {
  response: string;
  results_for: string;
  results: IAllInfo[];
}