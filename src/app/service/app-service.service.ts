import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  api = "http://starlord.hackerearth.com/bankAccount"

  constructor(private http:HttpClient) { }

  getAccountDetails(){
    return this.http.get(this.api)
  }
}
