import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@Component({
  selector: 'app-desig-dialog',
  templateUrl: './desig-dialog.component.html',
  styleUrls: ['./desig-dialog.component.css']
})
export class DesigDialogComponent implements OnInit {
  public form1: FormGroup;
  myClassObj = null;
  constructor(public dialogRef: MatDialogRef<DesigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
      this.myClassObj = data;
    }
    createForm(){
      this.form1 = this.fb.group({
          Code: ["", [Validators.required,Validators.maxLength(2)]],
          Name: ["", [Validators.required]],
          Description: ["", [Validators.required]]
        });
    }

  ngOnInit(): void {
    this.createForm();
    this.setFormValues( this.myClassObj);
  }
  setFormValues(obj){
    this.form1.patchValue({
        Code: obj.Code,
       Name:  obj.Name,
        Description: obj.Description
  });
  }
  validation_messages = {
    'Code': [
      { type: 'required', message: 'Roll No. is Required' },
       { type: 'maxlength', message: 'maximum length is 2' },
    ],
    'Name': [
      { type: 'required', message:'Name is Required' },
    ],
     'Description': [
      { type: 'required', message: 'Description  is Required' },
    ]
  };
btnCloseDesigDialog()
{
  this.dialogRef.close();
}
}
