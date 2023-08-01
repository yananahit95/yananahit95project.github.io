import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) { }

  sendSignUpData(data: any) {
    return this.http.post('http://localhost:3000/users/sign-up', data);
  }

  signUpUser(user: any) {
    this.sendSignUpData(user).subscribe(
      response => {
        console.log('Post request successful:', response);
      },
      error => {
        console.error('Error occurred during sign-up:', error);
      }
    );
  };

  sendSignInData(data: any) {
    return this.http.post('http://localhost:3000/users/sign-up', data);
  }

  signInUser(user: any) {
    this.sendSignInData(user).subscribe(
      (response: any) => {
        this.router.navigate(['/user-list']);
        console.log('Sign-in successful:', response);
      },
      (error:any) => {
        alert('Invalid Full Name or Password')
        console.error('Error occurred during sign-in:', error);
      }
    );
  }
}


