import { Component, OnInit } from '@angular/core';
import { Constants } from './config/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
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