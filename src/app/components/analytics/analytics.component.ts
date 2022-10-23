import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  temp = {
    title: '# of New Customers', statitics: [{ value: '97', tar: 'New Customers' },
    { value: '110', tar: 'Target' },
    { value: '88%', tar: 'Target Achievment' }]
  }

  basicData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Last Period',
        backgroundColor: '#42A5F5',
        data: [35, 34, 30]
      },
      {
        label: 'Current Period',
        backgroundColor: '#FFA726',
        data: [28, 48, 40]
      }
    ]
  };
}
