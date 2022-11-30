import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string = '';
  isLoading:boolean=false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z]{3,8}')])
  })
  loginSubmitForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.isLoading=true;
      this._AuthService.signin(loginForm.value).subscribe(
        {
          next: (response) => {
            if (response.message === 'success') {
              this.isLoading=false;
              sessionStorage.setItem('userToken',response.token);
              this._AuthService.saveUserData();
              this._Router.navigate(['/home']);
            } else {
              this.isLoading=false;
              this.errorMsg = response.message;
            }
          }
        }
      )
    }
  }

  constructor(private _AuthService: AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }

}
