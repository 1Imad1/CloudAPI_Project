import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestApiService, IAllInfo, Appearance, Images, Work, Connections, Biography } from '../Service/rest-api.service';

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


  constructor(public heroesService: RestApiService, public activatedRoute: ActivatedRoute, public navCtrl: NavController){
    this.id = this.activatedRoute.snapshot.params['id'];

    this.heroesService.GetSingleHero(this.id).subscribe((singleHero) => {
      this.hero = singleHero
    })

    this.heroesService.GetAppearance(this.id).subscribe((appearing => {
      this.appearance = appearing
    }))

    this.heroesService.GetImage(this.id).subscribe((jpg => {
      this.image = jpg
    }))

    this.heroesService.GetWork(this.id).subscribe((job => {
      this.work = job
    }))

    this.heroesService.GetConnection(this.id).subscribe((relation => {
      this.connection = relation
    }))

    this.heroesService.GetBiography(this.id).subscribe((journal => {
      this.bio = journal
    })) 
  }

  ngOnInit() {

  }

  goBack(){
    window.history.back();
  }
}
