import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'property-filter',
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.scss']
})
export class PropertyFilterComponent implements OnInit {
  propertyStatusList = [
    'All',
    'Active',
    'Occupied',
    'Vacant',
    'Inactive'
  ]
  tenantStatusList = [
    'All',
    'Active',
    'Inactive'
  ]

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
  }

  


}
