import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: []
})
export class ListUserComponent {

  errorMsg: any;

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('accessToken');
    this.errorMsg = 'Logged out. Please log in again.';
    this.router.navigate(['sign-in']);
  }

}
