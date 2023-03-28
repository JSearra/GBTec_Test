import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './config/constants';



@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl = 'https://api.unsplash.com';
  private accessKey = "uzMlewkX1vBjNdSLhPtsdPNRhYtdW-bmn0mMtqN7hWU";

  constructor(private http: HttpClient) { }

  // Calls the Unsplash API to search for photos with the given query and page number
  searchPhotos(query: string, page: number) {
    return this.http.get(`${this.apiUrl}/search/photos?query=${query}&page=${page}&per_page=10&client_id=${this.accessKey}`);
  }
  // Calls the Unsplash API to retrieve the details of a photo with the given ID
  getPhotoDetails(id: string) {
    return this.http.get(`${this.apiUrl}/photos/${id}?client_id=${this.accessKey}`);
  }
}
