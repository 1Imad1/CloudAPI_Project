import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: 'src/app/tabs/tabs.module#TabsPageModule' },
  { path: 'list', loadChildren: 'src/app/list/list.module#ListPageModule' },
  { path: 'info/:id', loadChildren: 'src/app/info/info.module#InfoPageModule' },
  { path: '', loadChildren: 'src/app/home/home.module#HomePageModule' },
  { path: 'quiz', loadChildren: './trivia-rest-api/trivia-rest-api.module#TriviaRestApiPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
