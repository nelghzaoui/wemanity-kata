import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContactComponent } from 'pages/contact/add/add-contact.component';
import { EditContactComponent } from 'pages/contact/edit/edit-contact.component';
import { NotFoundComponent } from 'pages/not-found/not-found.component';
import { HomeComponent } from 'pages/home/home.component';

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
