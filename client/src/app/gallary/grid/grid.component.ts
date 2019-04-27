import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { EventsService } from '../../shared/services/events.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  results: Array<any> = [];
  @Input() search: string;
  constructor(private photosService: PhotosService, private eventsService: EventsService) {

  }

  ngOnInit() {
    this.eventsService.on('fetchPhotosEvent', this.fetchPhotos.bind(this));
    this.fetchPhotos(this.search);
  }

  fetchPhotos(search: string) {
    return this.photosService.fetchPublicPhotos(search).subscribe((data: Array<any>) => {
      this.results = data;
    }, console.log);
  }

}
