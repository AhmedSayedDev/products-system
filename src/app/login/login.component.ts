import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-style.css'],
  standalone: true, 
  imports: [RouterModule, FormsModule, HttpClientModule] 
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('https://dummyjson.com/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe((response: any) => {
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/products']);
      } else {
        alert('Login failed');
      }
    }, error => {
      alert('Login failed');
    });
  }
}