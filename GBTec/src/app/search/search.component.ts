import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  page: number = 1;
  photos: any[] = [];

  constructor(private unsplashService: UnsplashService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.unsplashService.searchPhotos(this.query, this.page).subscribe((res: any) => {
      this.photos = res.results;
    });
  }

  nextPage() {
    this.page++;
    this.search();
  }

  prevPage() {
    this.page--;
    this.search();
  }
}