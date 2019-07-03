import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyHomeRoutingModule } from './lazy-home-routing.module';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from '../../shared/modules/material/material.module';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  declarations: [HomeComponent, TaskTableComponent],
  imports: [
    CommonModule,
    LazyHomeRoutingModule,
    MaterialModule
  ]
})
export class LazyHomeModule { }
