import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//This HTTP client allows us to make HTTP requests to your express server
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Here is where we actually import it for use in the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
