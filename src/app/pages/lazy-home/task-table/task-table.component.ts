import {Component, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../../core/models/task';
import {Router} from '@angular/router';
import {TasksService} from '../../../core/services/tasks.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';



@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  private taskList: Task[];
  public displayedColumns: string[] = ['id', 'title', 'desc', 'status', 'date', 'place', 'address', 'update', 'delete'];
  public dataSource;

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


  constructor(private router: Router, private taskService: TasksService) { }

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
      console.log(id, 'id of current for delete');
  }

  public redirectToUpdate(id: any) {
    console.log(id, 'id of current for update');
  }

  public createTask() {

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
}
