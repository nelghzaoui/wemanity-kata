import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AppComponent } from './app.component';
import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
