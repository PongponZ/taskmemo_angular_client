
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  URL_BASE = "https://taskmemo-server.herokuapp.com";

  constructor(private httpClient:HttpClient) {}

  async getTask(){
    return await this.httpClient.get(this.URL_BASE+'/getTask');
  }
  
  saveTask(text:string){
    let data = { text:text };
    this.httpClient.post(this.URL_BASE+'/addTask',data).subscribe( res => res);
  }
}
