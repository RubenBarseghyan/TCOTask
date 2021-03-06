import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public notifier: NotifierService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.notifier.notify('info', 'You logged in successfully');

  }

}
