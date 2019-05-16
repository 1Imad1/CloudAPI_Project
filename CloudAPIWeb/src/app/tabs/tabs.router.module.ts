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
            loadChildren: 'src/app/list/list.module#ListPageModule'
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '', 
            loadChildren: 'src/app/account/account.module#AccountPageModule' 
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
      }
    ]
  },  
  {
    path: '',
    redirectTo: '/tabs/account',
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
