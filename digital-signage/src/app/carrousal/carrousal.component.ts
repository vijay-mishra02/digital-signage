import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UploadsService } from '../uploads.service';


@Component({
  selector: 'app-carrousal',
  templateUrl: './carrousal.component.html',
  styleUrls: ['./carrousal.component.css']
})
export class CarrousalComponent implements OnInit {

  grid = [2,4,6,8]
  height = window.innerHeight
  width = window.innerWidth
  value = 2
  fakeArray = new Array(this.value/2);
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items

  constructor(config: NgbCarouselConfig, private uploadService: UploadsService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.getUploads()
  }

  onChange(newValue){
    this.fakeArray = new Array(newValue/2);
  }

  getUploads(){
    this.uploadService.getUploads().subscribe((data)=>{
      this.items = data;
      console.log(this.items)
    });
  }

  log(val) { console.log(val); }

}
