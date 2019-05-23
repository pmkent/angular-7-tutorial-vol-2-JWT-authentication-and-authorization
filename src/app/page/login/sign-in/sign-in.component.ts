import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent {

  errorMsg: any;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(5), Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20) ]]
      }
    );
  }

  onLogin() {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    if ((username === 'userone@gmail.com') && (password === 'password')) {
      localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwaGlsbWtpZXRpQGhvdG1haWw' +
      'uY29tIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbiIsImlhdCI6MTU1NjM3MjAyMiwiZXhwIjox' +
      'NTU2MzczODIyfQ.eVdGbsiOheUoWydx3JU-KEf4k1XV4yORSpFweo1j3Es');
      this.errorMsg = null;
      this.router.navigateByUrl('/list-user');
    } else {
      this.errorMsg = 'Username and/or password do not match!';
      this.router.navigate(['sign-in']);
    }
  }

}
