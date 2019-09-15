import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddContactComponent } from 'pages/contact/add/add-contact.component';
import { AppComponent } from './app.component';
import { EditContactComponent } from 'pages/contact/edit/edit-contact.component';
import { HomeComponent } from 'pages/home/home.component';
import { NotFoundComponent } from 'pages/not-found/not-found.component';

@NgModule({
  declarations: [AppModule.COMPONENT],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  static COMPONENT = [
    AddContactComponent,
    AppComponent,
    EditContactComponent,
    HomeComponent,
    NotFoundComponent
  ];
}
