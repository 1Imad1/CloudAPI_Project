import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeroOrVillainNotFoundPage } from './hero-or-villain-not-found.page';

const routes: Routes = [
  {
    path: '',
    component: HeroOrVillainNotFoundPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeroOrVillainNotFoundPage]
})
export class HeroOrVillainNotFoundPageModule {}
