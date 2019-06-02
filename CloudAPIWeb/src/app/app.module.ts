import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { RestApiService } from './Service/rest-api.service';
import { FormsModule } from '@angular/forms';
import {AuthService} from './Auth/auth.service'
import {TriviaService} from './Service/trivia.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    StatusBar,
    RestApiService,
    SplashScreen,
    AuthService,
    TriviaService,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
