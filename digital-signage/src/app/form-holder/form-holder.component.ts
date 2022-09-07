import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-holder',
  templateUrl: './form-holder.component.html',
  styleUrls: ['./form-holder.component.css']
})
export class FormHolderComponent implements OnInit {
  isPdfUploaded: boolean;
  pdfSrc: any;

  constructor() { }

  ngOnInit(): void {
  }

  public uploadFile(event:any) {
    let $img: any = document.querySelector('#upload-doc');
    if(event.target.files[0].type == 'application/pdf'){
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result;
        };
        this.isPdfUploaded = true;
        reader.readAsArrayBuffer($img.files[0]);
      }
    } else{
      alert('Please upload pdf file')
    }
 }

}
