import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormHolderService {

  constructor(private http:HttpClient) { }

  // API url
  baseApiUrl = "http://localhost:8080/files/savefile"
  

  getImage(){
    this.http.get('http://localhost:8080/files/getAllUploads').subscribe((data=>{
      console.log(data)
      return data;
  }));
  }

  // Returns an observable
  upload(file):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(this.baseApiUrl, formData)
  }
}
