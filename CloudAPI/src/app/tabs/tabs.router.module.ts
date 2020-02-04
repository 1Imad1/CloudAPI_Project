import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '', 
            loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '', 
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'quiz',
        children: [
          {
            path: '', 
            loadChildren: () => import('../trivia-rest-api/trivia-rest-api.module').then( m => m.TriviaRestApiPageModule)
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
