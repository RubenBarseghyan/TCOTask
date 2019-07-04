
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {HeaderComponent} from '../../components/header/header.component';
import {RouterModule} from '@angular/router';


const material = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
];


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    material,
    RouterModule,
    NotifierModule
  ],
  exports: [
    material,
    HeaderComponent,
    NotifierModule
  ]
})
export class MaterialModule { }
