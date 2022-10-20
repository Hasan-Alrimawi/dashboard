import { Component, OnInit } from '@angular/core';
import { record } from '../record/record.component';

@Component({
  selector: 'app-working-capital',
  templateUrl: './working-capital.component.html',
  styleUrls: ['./working-capital.component.css']
})
export class WorkingCapitalComponent {
  data: record[] = [{ title: 'Current Assets', value: 1563320 },
  { title: 'Cash', value: 15203 },
  { title: 'Whatever', value: 7500 }
  ];
  data2: record[] = [{ title: 'Current Asset222s', value: 1563320 },
  { title: 'Ca2222sh', value: 15203 },
  { title: 'Whate2222ver', value: 7500 }
  ];
  data3: record[] = [{ title: 'Working Capital', value: 61000 }];
  data4: record[] = [{ title: 'Current Ratio', value: 1.9 }];
}
