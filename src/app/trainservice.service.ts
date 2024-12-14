import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainserviceService {

  constructor( private http: HttpClient) { }
   url = 'http://localhost:3000'
   
  getlocation() {
    return  this.http.get<any>(`${this.url}/locations`)
  } 

  getavailabe() {
    return  this.http.get<any>(`${this.url}/trainBooking`)
  } 
}
