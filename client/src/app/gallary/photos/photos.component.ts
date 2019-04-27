import { Component, ViewEncapsulation, Input } from '@angular/core';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotosComponent {
  constructor(private eventsService: EventsService) { }

  gridview = true;
  listview = false;
  search = 'Bangalore';

  toggalGridView(): void {
    this.gridview = true;
    this.listview = false;
  }
  toggalListView(): void {
    this.gridview = false;
    this.listview = true;
  }

  fetchPhotos(): void {
    this.eventsService.broadcast('fetchPhotosEvent', this.search);
  }
}
