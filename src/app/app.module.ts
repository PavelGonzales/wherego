import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { EventsComponent } from './pages/events/events.component';
import { RandomComponent } from './pages/random/random.component';

const appRoutes: Routes =[
    { path: '', component: MainComponent},
    { path: 'cinema', component: CinemaComponent},
    { path: 'theater', component: TheaterComponent},
    { path: 'events', component: EventsComponent},
    { path: 'random', component: RandomComponent},
    { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    MainComponent,
    TheaterComponent,
    EventsComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineSVGModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
