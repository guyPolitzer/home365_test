import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Property } from '../../models/property.interface';
import { DialogData } from '../../models/dialogData.interface'

@Component({
  selector: 'status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss']
})
export class StatusDialogComponent implements OnInit {
  public content!: String;
  public status!: String;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<StatusDialogComponent>
  ) { }

  ngOnInit(): void {
 
  }



  public onCloseClick(): void {
    this.dialogRef.close();
  }



}
