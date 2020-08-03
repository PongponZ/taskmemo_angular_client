import { FetchDataService } from './service/fetch-data.service';
import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  time:string,
  text:string
}

var ELEMENT_DATA = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'taskmemo-app';
  displayedColumns: string[] = ['time', 'text'];
  ELEMENT_DATA: any;
  textArea:string;


  constructor(private fetchData:FetchDataService){
    
  }

  async ngOnInit(){
    (await this.fetchData.getTask()).subscribe( res => this.ELEMENT_DATA = res)
  }

  save(){
    this.fetchData.saveTask(this.textArea);
    this.textArea = "";
  }

} 

