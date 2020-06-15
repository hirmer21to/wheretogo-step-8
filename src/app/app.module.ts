import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhereToGoComponent } from './where-to-go/where-to-go.component';
import { LectureItemComponent } from './lecture-item/lecture-item.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';
import { LectureDetailsComponent } from './lecture-details/lecture-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { LectureAddComponent } from './lecture-add/lecture-add.component';


@NgModule({
  declarations: [
    AppComponent,
    WhereToGoComponent,
    LectureItemComponent,
    TimetableComponent,
    LectureDetailsComponent,
    LectureAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
