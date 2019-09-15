import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: AddContactComponent
      },
      {
        path: 'edit/:id',
        component: EditContactComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
