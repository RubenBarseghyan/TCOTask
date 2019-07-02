
import { NgModule } from '@angular/core';
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
  MatPaginatorModule
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
  MatPaginatorModule
];


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    material,
    RouterModule
  ],
  exports: [
    material,
    HeaderComponent
  ]
})
export class MaterialModule { }
