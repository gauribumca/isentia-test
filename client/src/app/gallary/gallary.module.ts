import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { PhotosService } from './services/photos.service';

@NgModule({
  declarations: [PhotosComponent, GridComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PhotosComponent],
  providers: [PhotosService]
})
export class GallaryModule { }
