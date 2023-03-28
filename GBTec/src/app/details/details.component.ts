import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  photo: any = {};

  constructor(private route: ActivatedRoute, private unsplashService: UnsplashService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.unsplashService.getPhotoDetails(id).subscribe((res: any) => {
      this.photo = res;
    });
  }
}