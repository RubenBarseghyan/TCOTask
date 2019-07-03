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
      title: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      desc: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      status: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      place: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    });
  }

  public resetForm(): void {
    this.createTaskGroup.reset();
  }

 public createTask(): void {
   this.theCreatedTask = this.createTaskGroup.getRawValue();
   this.dialogRef.close(this.theCreatedTask);
   this.resetForm();
  }
}
