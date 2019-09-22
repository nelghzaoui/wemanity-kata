import { AppRoutingModule } from './routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

/* SERVICE */
import { ContactService } from 'services/contact/contact.service';

@NgModule({
  declarations: [AppModule.PAGES],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppModule.MATERIALS,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppModule.PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static MATERIALS = [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule
  ];

  private static PAGES = [
    AddContactComponent,
    AppComponent,
    EditContactComponent,
    HomeComponent,
    NotFoundComponent
  ];

  private static PROVIDERS = [ContactService];
}
