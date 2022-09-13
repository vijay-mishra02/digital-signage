import { Component, OnInit } from '@angular/core';
import { UploadsService } from 'src/app/uploads.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  items;

  constructor(private uploadService: UploadsService) { 
  }

  ngOnInit(): void {
    this.getUploads()
  }

  getUploads(){
    this.uploadService.getUploads().subscribe((data)=>{
      this.items = data;
      console.log(this.items)
    });
  }

}
