import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>
  {
    return this.http.get(`https://api.spacexdata.com/v3/launches`);
  }
}
