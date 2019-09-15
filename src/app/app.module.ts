import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/* PAGES */
import { AddContactComponent } from 'pages/contact/add/add-contact.component';
import { AppComponent } from './app.component';
import { EditContactComponent } from 'pages/contact/edit/edit-contact.component';
import { HomeComponent } from 'pages/home/home.component';
import { NotFoundComponent } from 'pages/not-found/not-found.component';

/* MATERIAL COMPONENT */
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppModule.PAGES],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppModule.MATERIALS,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static PAGES = [
    AddContactComponent,
    AppComponent,
    EditContactComponent,
    HomeComponent,
    NotFoundComponent
  ];

  private static MATERIALS = [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ];
}
