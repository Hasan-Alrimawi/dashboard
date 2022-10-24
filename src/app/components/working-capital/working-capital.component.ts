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
  data$!: Observable<capitalInfo[]>;
  ngOnInit(): void {
    this.data$ = this.dataService.getWorkingCapitalData();  
  }
}

export interface capitalInfo{
  content: record[];
}