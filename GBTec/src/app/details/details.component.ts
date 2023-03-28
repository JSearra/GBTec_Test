import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  photo: any = {}; // The photo object for the current photo being displayed

  constructor(private route: ActivatedRoute, private unsplashService: UnsplashService) { }

  ngOnInit() {

    // Extracts the ID parameter from the route
    const id = this.route.snapshot.paramMap.get('id') || '';

    // Calls the Unsplash API to retrieve the photo details
    this.unsplashService.getPhotoDetails(id).subscribe((res: any) => {
      this.photo = res;
    });
  }
}