import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { BehaviorSubject } from 'rxjs';
import { Property } from '../models/property.interface';
import { FilterBy } from '../models/filterBy.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private http: HttpClient
  ) { }

 

 
  public getProperties() {
    this.http.get('../assets/properties.json')
  }

  
}
