import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { PrinterComponent } from './printer/printer.component';
import { FootballClubComponent } from './football-club/football-club.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    PrinterComponent,
    FootballClubComponent
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
