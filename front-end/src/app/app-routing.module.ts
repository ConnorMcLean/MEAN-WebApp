//New angular 7 with angular CLI generates seperate routing file when selecitng
//relevant option
//file holds relevant route arrray and auto imports to the app.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import various relevant components
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

//Route arry for routing to other pages
const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    //Colon denotes path variable
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    //Redirect path to list on full pattern match
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
