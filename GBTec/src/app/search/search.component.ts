import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string = ''; // The search query entered by the user
  photos: any[] = []; // The array of photos returned by the Unsplash API
  page: number = 1;   // The current page number of the search results
  photosToShow: any[] = [];

  constructor(private unsplashService: UnsplashService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Executes a search based on the user's query.
   */

  searchPhotos(): void {
    if (this.query.trim() === '') {
      return;
    }

    this.unsplashService.searchPhotos(this.query, this.page)
      .subscribe(
        (data: any) => {
          this.photos = data.results;
          this.photosToShow = this.photos.slice(0, 10); // Display only the first 10 images by default
        },
        (error: any) => console.log(error)
      );
  }

  /**
   * Loads the next page of search results.
   * I've left in some of the code and console logs from where I was trying to fix the paging issue
   */

  loadMore(): void {

    console.log('Before', this.photos.length);
    //this.photosToShow = this.photos.slice(0, 20);
    this.page++;
    this.searchPhotos()
    console.log('After', this.photos.length);

  }
}