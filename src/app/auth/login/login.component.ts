import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // 👈 Import this

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],   // 👈 Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/layout']);
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
