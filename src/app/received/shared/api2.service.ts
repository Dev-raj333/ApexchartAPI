import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get<any>("http://localhost:3000/chart")
    .pipe(map((res=>{
      return res;
    })))
  }
  getDailyData(){
    return this.http.get<any>("http://localhost:3000/areachart")
    .pipe(map(result=> result));
  }
}
