import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    UploadsComponent,
    UploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UploadsModule { }
