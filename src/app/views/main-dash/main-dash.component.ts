import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  dataWrapper!: description[];
  ngOnInit(): void {
    this.service.getChartsData().subscribe((passed) => {this.dataWrapper = passed});  
  }
  drop(event: CdkDragDrop<description[]>) {
    moveItemInArray(this.dataWrapper, event.previousIndex, event.currentIndex);
  }

}
