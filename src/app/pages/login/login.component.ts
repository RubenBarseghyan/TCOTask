import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userFormLogin: FormGroup;
  public  formControlEmailMsg = 'Not Valid Email';
  public  formControlPassMsg = 'password length must be 4-15 symbols';
  public emailErrMsgFromBackend: string;
  public passErrMsgFromBackend: string;
  public isLoad = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userFormLogin = new FormGroup({
      userEmail: new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)])
    });
  }
  public onSubmit() {
    this.isLoad = true;
  }
}
