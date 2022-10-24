import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './components/record/record.component';
import { WorkingCapitalComponent } from './components/working-capital/working-capital.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import {ChartModule} from 'primeng/chart';
import { MainDashComponent } from './views/main-dash/main-dash.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    WorkingCapitalComponent,
    AnalyticsComponent,
    MainDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
