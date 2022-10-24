import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {

  @Input()
  data!: Readonly<description>;

  
  // temp = {
  //   title: '# of New Customers', statitics: [{ value: '97', parameter: 'New Customers' },
  //   { value: '110', parameter: 'Target' },
  //   { value: '88%', parameter: 'Target Achievment' }]
  // }

  // basicData = {
  //   labels: ['January', 'February', 'March'],
  //   datasets: [
  //     {
  //       label: 'Last Period',
  //       backgroundColor: '#42A5F5',
  //       data: [35, 34, 30]
  //     },
  //     {
  //       label: 'Current Period',
  //       backgroundColor: '#FFA726',
  //       data: [28, 48, 40]
  //     }
  //   ]
  // };
}


interface statistics {
  value: string,
  parameter: string
}

interface basicData{
  labels: string[],
  datasets:datasets[]
}

interface datasets {
  label: string,
  backgroundColor: string,
  data: number[]
}

export interface description {
  title: string,
  statistics: statistics[],
  basicData: basicData
}