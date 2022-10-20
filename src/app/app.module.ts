import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { WorkingCapitalComponent } from './components/working-capital/working-capital.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    WorkingCapitalComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
