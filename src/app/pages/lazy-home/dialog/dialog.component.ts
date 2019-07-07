import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public createTaskGroup: FormGroup;
  public isEdit = false;
  public theCreatedTask;

  // MAT_DIALOG_DATA data is for send data to dialog
  // dialogRef for getting data from dialog
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
    this.creteTaskForm();
  }

  public creteTaskForm(): void {
    this.createTaskGroup = new FormGroup({
      title: new FormControl(this.data.el ? this.data.el.title : '', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      desc: new FormControl(this.data.el ? this.data.el.desc : '', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      status: new FormControl(this.data.el ? this.data.el.status : '', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
      date: new FormControl(this.data.el ? this.data.el.date : ''),
      place: new FormControl(this.data.el ? this.data.el.place : '', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      address: new FormControl(this.data.el ? this.data.el.address : '', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    });
    if (this.data.isEdit) {
      this.isEdit = true;
    }
  }

  public resetForm(): void {
    this.createTaskGroup.reset();
  }

 public createTask(): void {
   this.theCreatedTask = this.createTaskGroup.getRawValue();
   const currentDate = new Date().toISOString();
   if (this.theCreatedTask.date.toISOString() > currentDate) {
     this.theCreatedTask.status = '1';
   } else {
     this.theCreatedTask.status = '3';
   }
   const dateObj = this.theCreatedTask.date;
   const month = dateObj.getUTCMonth() + 1;
   const day = dateObj.getUTCDate() + 1;
   const year = dateObj.getUTCFullYear();
   const newdate = `${day}.${month}.${year}`;
   this.theCreatedTask.date = newdate;
   if (this.data.el) {
     this.theCreatedTask.index = this.data.index;
   }
   this.dialogRef.close(this.theCreatedTask);
   this.resetForm();
  }

}
