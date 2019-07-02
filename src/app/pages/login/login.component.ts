import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

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

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.userFormLogin = new FormGroup({
      userEmail: new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)])
    });
  }
  public onSubmit() {
    this.isLoad = true;
    this.authService.login().subscribe((res) => {
      const loginValue = this.userFormLogin.getRawValue();
      console.log(loginValue);
      if (res.email === loginValue.userEmail && res.password === loginValue.userPassword) {
        localStorage.setItem('userInfo', JSON.stringify(res.email));
        this.router.navigate(['home']);
      }
      this.isLoad = false;
      this.emailErrMsgFromBackend = this.passErrMsgFromBackend = 'there is no user with such email and password';

    }, (err) => {
      console.log(err.message);
      this.isLoad = false;
    });
  }
}
