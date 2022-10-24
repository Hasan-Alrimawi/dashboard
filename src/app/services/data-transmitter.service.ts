import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'
import { description } from '../components/analytics/analytics.component';
import { capitalInfo } from '../components/working-capital/working-capital.component';

@Injectable({
  providedIn: 'root'
})
export class DataTransmitterService {
  constructor(private httpService: HttpClient) { }

  getChartsData(){
    const url = '../../assets/data-files/charts.json';
    return this.httpService.get<Array<description>>(url).pipe(map((data) =>data));
  }

  getWorkingCapitalData(){
    return this.httpService.get<Array<capitalInfo>>('../../assets/data-files/work-capital.json').pipe(map((data) =>data));
  }
}
