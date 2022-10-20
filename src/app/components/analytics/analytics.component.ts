import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  temp = { title: '# of N', statitics:[{ value: '97', tar: 'New Customers' }, 
  {value:'110', tar:'Target'}, 
  {value:'88%', tar:'Target Achievment'}]}
}
