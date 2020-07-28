import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { NavComponent } from './app/nav/nav.component';
import { FooterComponent } from './app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
