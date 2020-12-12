import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { DesignationService } from './designation.service';
import { Observable } from 'rxjs';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { throwError as observableThrowError } from 'rxjs';
import { IPayDesignation } from 'app/shared/models/IPayDesignation';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { DesigDialogComponent } from './desig-dialog/desig-dialog.component';
@Component({
    selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css'],
  providers: [DesignationService], 
})
export class DesignationComponent implements OnInit {
 
  dataSource: IPayDesignation[]= [];

    myclick() {
     
    }
  ngOnInit(): void {
    
    this.classService.getDesignations()
        .subscribe(data => {
          console.log(data);
          this.dataSource = data;
         
        },
          err => {
            console.log(err);
          }
        );
  }
  constructor(private classService: DesignationService,
    private _httpClient: HttpClient, public dialog: MatDialog
  ) {

   }
   btnEditClick(obj: IPayDesignation):void{
    
 const refDialog= this.dialog.open(DesigDialogComponent,{
   width: '450px',
   height: '450px',
   data: {obj:obj,
  service: this.classService} 
 })
 refDialog.afterClosed().subscribe(result => {
   
   // Pizza!
});
}

}
