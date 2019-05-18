import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'src/app/tabs/tabs.module#TabsPageModule' },
  { path: 'account', loadChildren: 'src/app/account/account.module#AccountPageModule' },
  { path: 'list', loadChildren: 'src/app/list/list.module#ListPageModule' },
  { path: 'info/:id', loadChildren: 'src/app/info/info.module#InfoPageModule' },
  { path: 'hero-or-villain-not-found', loadChildren: './hero-or-villain-not-found/hero-or-villain-not-found.module#HeroOrVillainNotFoundPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
