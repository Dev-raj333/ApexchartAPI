import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<any>("http://localhost:3000/admin")
    .pipe(map((res=>{
      return res;
    })))
  }
  postdata(data: any){
    return this.http.post<any>("http://localhost:3000/admin",data)
    .pipe(map((res=>{
      return res;
    })))
  }
}
