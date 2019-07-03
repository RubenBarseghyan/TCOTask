import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyHomeRoutingModule } from './lazy-home-routing.module';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from '../../shared/modules/material/material.module';
import { TaskTableComponent } from './task-table/task-table.component';
import { DialogComponent } from './dialog/dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, TaskTableComponent, DialogComponent],
  imports: [
    CommonModule,
    LazyHomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent]
})
export class LazyHomeModule { }
