import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TriviaRestApiPage } from './trivia-rest-api.page';

const routes: Routes = [
  {
    path: '',
    component: TriviaRestApiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TriviaRestApiPage]
})
export class TriviaRestApiPageModule {}
