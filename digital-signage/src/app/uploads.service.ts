import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  baseApiUrl = "http://localhost:8080/files/downloadAll"

  constructor(private http : HttpClient) { }

  getUploads():Observable<any> {
    return this.http.get(this.baseApiUrl)
  }

}
