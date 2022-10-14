import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormHolderService } from '../form-holder.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

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
  isPdfUploaded: boolean;
  pdfSrc: any;
  currentpage;
  totalPages: number;
  

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
      this.imageUrl = "http://localhost:8080/files/download/"+ data.response;
      console.log(this.imagePath)
      })
    );
  }


  public uploadFile(event:any) {
    console.log(event)
    let $img: any = document.querySelector('#upload-doc');
    if(event.target.files[0].type == 'application/pdf'){
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result;
          console.log(this.pdfSrc)
        };
        this.isPdfUploaded = true;
        reader.readAsArrayBuffer($img.files[0]);
      }
    } else{
      alert('Please upload pdf file')
    }
 }


 afterLoadComplete(pdf: PDFDocumentProxy) {
  this.totalPages = pdf.numPages;
  }

  public previous() {
    if (this.currentpage > 0) {
      if (this.currentpage == 1) {
        this.currentpage = this.totalPages;
      } else {
        this.currentpage--;
      }
    }
  }
 
  public next() {
    if (this.totalPages > this.currentpage) {
      this.currentpage = this.currentpage + 1 ;
    } else {
      this.currentpage = 1;
    }
  }

}


