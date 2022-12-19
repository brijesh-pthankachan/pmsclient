import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post("https://localhost:7223/api/accounts/login", data);
  }
}
