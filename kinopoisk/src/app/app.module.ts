import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FilmpageComponent } from './filmpage/filmpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ SearchComponent } from './search/search.component';
import { NotdoneComponent } from './notdone/notdone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FilmpageComponent,
    SearchComponent,
    NotdoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
