import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { description } from 'src/app/components/analytics/analytics.component';
import { DataTransmitterService } from 'src/app/services/data-transmitter.service';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit{

  constructor(private service: DataTransmitterService){}
  dataWrapper$!: Observable<description[]>;
  ngOnInit(): void {
    this.dataWrapper$ = this.service.getChartsData();  
  }

  // dataWrapper$: Observable<description[]> = this.service.getChartsData();
  

}
