import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../core/models/task';
import {Router} from '@angular/router';
import {TasksService} from '../../../core/services/tasks.service';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';
import { NotifierService } from 'angular-notifier';




@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  private taskList: Task[];
  public displayedColumns: string[] = ['id', 'title', 'desc', 'status', 'date', 'place', 'address', 'update', 'delete'];
  public dataSource;
  public today: string;

  public filterList: any[] = [
    {value: 'default', status: 'Default'},
    {value: 'title', status: 'Title'},
    {value: 'place', status: 'Place name'},
    {value: 'address', status: 'Address'},
    {value: 'date', status: 'Date'}
  ];
  public filterSelectedValue = 'default';

  public statuses: any[] = [
    {value: '1', status: 'pending'},
    {value: '2', status: 'resolve'},
    {value: '3', status: 'rejected'}
  ]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router,
              private taskService: TasksService,
              private dialog: MatDialog,
              private notifier: NotifierService) { }

  ngOnInit() {
    this.getAllTasks();
      }

  // different data for datatable filtered

  public makeDataForTable(filtered: Task[]) {
    this.dataSource = new MatTableDataSource(filtered);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  public getAllTasks() {
    this.taskService.getTasks().subscribe((res: any) => {
      this.taskList = res;
      this.makeDataForTable(res);
    }, (err) => {console.log(err.message); });
  }

  public redirectToDelete(id: any) {
      this.taskList.splice(id, 1);
      this.makeDataForTable(this.taskList);
      this.notifier.notify('info', 'the task was successfully deleted');
  }

  public redirectToUpdate(element: any, id: any ) {
    console.log(id, 'id of current for update');
    console.log(element);
    const dialogRefUpdate = this.dialog.open(DialogComponent, {
      width: '40%',
      data: {
        isEdit: true,
        title: `${element.title} Editing`,
        el: element,
        index: id
      }
    });

    dialogRefUpdate.afterClosed().subscribe((data) => {
        if (data) {
          this.taskList[data.index] = data;
          this.makeDataForTable(this.taskList);
          this.notifier.notify('info', 'the task was successfully update');
        }
    }, err => console.log(err.message));
  }

  public createTask() {
      const dialogRefCreate = this.dialog.open(DialogComponent, {
        width: '40%',
        data: {
          title: 'Add New Task'
        }
      });

      dialogRefCreate.afterClosed().subscribe((data: Task) => {
        if (data) {
          this.taskList.push(data);
          this.makeDataForTable(this.taskList);
          this.notifier.notify('info', 'Task successfully added!');
        }
      }, err => {console.log(err.message); } );
  }

  doFilter(value: any) {
    const filterName = this.filterSelectedValue.trim().toLowerCase();
    if (filterName === 'default') {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    } else {
      const theData = this.taskList.filter((elem) => elem[filterName].toLowerCase().includes(value.trim().toLowerCase()));
      this.makeDataForTable(theData);
    }
  }

  public getTasksDate() {
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    return `${currentDate}.${currentMonth}.${currentYear}`;
  }

}
