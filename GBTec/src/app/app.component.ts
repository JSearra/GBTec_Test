import { Component, OnInit } from '@angular/core';
import { Constants } from './config/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Ive left some console logs of where I was checking things were working. 
export class AppComponent implements OnInit {
  title = Constants.TitleOfSite;
  api_endpoint = Constants.API_ENDPOINT;
  constructor() {
    console.log(this.api_endpoint);
  }
  ngOnInit() {
    console.log(this.title);
  }
} 