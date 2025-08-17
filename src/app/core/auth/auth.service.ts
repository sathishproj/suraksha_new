import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'auth_token';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Dummy check (replace with API later)
    if (email === 'admin' && password === '1234') {
      localStorage.setItem(this.TOKEN_KEY, 'dummy-jwt-token');
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
