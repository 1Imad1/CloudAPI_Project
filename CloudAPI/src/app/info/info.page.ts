import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestApiService, IAllInfo, Appearance, Images, Work, Connections, Biography } from '../services/rest-api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  hero:IAllInfo
  appearance:Appearance
  image:Images
  work:Work
  connection:Connections
  bio:Biography
  id: any;


  constructor( 
    public heroesService: RestApiService, 
    public activatedRoute: ActivatedRoute, 
    public navCtrl: NavController
    ){
    this.id = this.activatedRoute.snapshot.params['id'];

    this.heroesService.GetSingleHero(this.id).subscribe((singleHero) => {
      this.hero = singleHero
    },err => console.log(err.message))

    this.heroesService.GetAppearance(this.id).subscribe((appearing => {
      this.appearance = appearing
    }),err => console.log(err.message))

    this.heroesService.GetImage(this.id).subscribe((jpg => {
      this.image = jpg
    }),err => console.log(err.message))

    this.heroesService.GetWork(this.id).subscribe((job => {
      this.work = job
    }),err => console.log(err.message))

    this.heroesService.GetConnection(this.id).subscribe((relation => {
      this.connection = relation
    }),err => console.log(err.message))

    this.heroesService.GetBiography(this.id).subscribe((journal => {
      this.bio = journal
      console.log(this.bio.aliases)
    }),err => console.log(err.message))
  }

  ngOnInit() {

  }

  goBack(){
    window.history.back();
  }
}
