import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTransmitterService } from 'src/app/services/data-transmitter.service';
import { record } from '../record/record.component';

@Component({
  selector: 'app-working-capital',
  templateUrl: './working-capital.component.html',
  styleUrls: ['./working-capital.component.css']
})
export class WorkingCapitalComponent implements OnInit {
  constructor(private dataService: DataTransmitterService){}
  data!: capitalInfo[];
  ngOnInit(): void {
    this.dataService.getWorkingCapitalData().subscribe((passed) => {this.data = passed});  
  }

  drop(event: CdkDragDrop<record[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
}

export interface capitalInfo{
  content: record[];
}