import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '', 
            loadChildren: 'src/app/list/list.module#ListPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '', 
            loadChildren: 'src/app/home/home.module#HomePageModule' 
          }
        ]
      },      
      {
        path: 'info',
        children: [
          {
            path: '', 
            loadChildren: 'src/app/info/info.module#InfoPageModule'
          }
        ]
      },
      {
        path: 'quiz',
        children: [
          {
            path: '', 
            loadChildren: './trivia-rest-api/trivia-rest-api.module#TriviaRestApiPageModule'
          }
        ]
      }
    ]
  },  
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
