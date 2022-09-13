import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormHolderService } from '../form-holder.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.css']
})
export class FormHolderComponent implements OnInit {
  // isPdfUploaded: boolean;
  // pdfSrc: any;
  shortLink: string = "";
  loading: boolean = false; 
  file: File = null;
  object:any;
  imageUrl;
  imagePath;

  constructor(private formHolderService: FormHolderService, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.formHolderService.upload(this.file).subscribe((data=>{
      console.log(data)
      this.imageUrl = "http://localhost:8080/files/downloadById/"+ data.response;
      console.log(this.imagePath)
      })
    );
  }


  // public uploadFile(event:any) {
  //   let $img: any = document.querySelector('#upload-doc');
  //   if(event.target.files[0].type == 'application/pdf'){
  //     if (typeof (FileReader) !== 'undefined') {
  //       let reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         this.pdfSrc = e.target.result;
  //       };
  //       this.isPdfUploaded = true;
  //       reader.readAsArrayBuffer($img.files[0]);
  //     }
  //   } else{
  //     alert('Please upload pdf file')
  //   }
 }


