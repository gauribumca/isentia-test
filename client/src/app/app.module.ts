import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GallaryModule } from './gallary/gallary.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EventsService } from './shared/services/events.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GallaryModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
