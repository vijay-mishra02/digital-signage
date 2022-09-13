import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imagePath: string;
  @Input() item;

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
    this.imagePath = 'http://localhost:8080/files/downloadById/'+this.item.id
  }

}
