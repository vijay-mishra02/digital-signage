import { Component,OnInit } from '@angular/core';
import { UploadsService } from '../uploads.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize   } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  items: GalleryItem[];
  imageData = [];
  
  // data = [
  //   {
  //     srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  //     previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  //     previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  //     previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  //     previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  //     previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  //     previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  //     previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  //   },
  //   {
  //     srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  //     previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  //   }
  // ]

  // imageData = this.data;

  constructor(private uploadService: UploadsService, public gallery: Gallery, public lightbox: Lightbox) { 

  }
  ngOnInit(): void {
    this.getUploads()

    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Top,
      autoPlay: true
    });
    // this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

  getUploads(){
    this.uploadService.getUploads().subscribe((data)=>{
      for (const obj of data) {
        const album = {
          srcUrl: "http://localhost:8080/files/download/"+ obj.id,
          previewUrl: "http://localhost:8080/files/download/"+ obj.id,             
        }
        this.imageData.push(album);
      }
      this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
      console.log(this.imageData)
      
    });
  }

  
}
