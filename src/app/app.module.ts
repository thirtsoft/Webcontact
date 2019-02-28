import { ContactService } from './../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutService } from 'src/services/about.service';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { GalleryService } from 'src/services/gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AboutService, 
    GalleryService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
