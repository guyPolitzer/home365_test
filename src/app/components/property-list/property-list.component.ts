import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StatusDialogComponent } from '../status-dialog/status-dialog.component';
import { Property } from '../../models/property.interface';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  @Input() properties: Property[] = [];
  
  displayedColumns: string[] = [
    'created', 
    'property', 
    'propertyStatus', 
    'plan',
    'owner',
    'ownerStatus',
    'tenant', 
    'tenantStatus'
  ];
  isLoading: boolean = true;


  constructor(
    public dialog: MatDialog,
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
   
  }



  openDialog(topic: string, property: any): void {
    this.dialog.open(StatusDialogComponent, {
      width: '400px',
      data: {topic, property}
    });
  }

  
}
