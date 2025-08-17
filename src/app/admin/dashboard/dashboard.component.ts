import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../../core/auth/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  // imports: [RouterOutlet],   // 👈 add this
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(private authService: AuthService) { }
  ngAfterViewInit(): void {
    const ctx: any = document.getElementById('enquiryChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Geriatric Enquiries',
            data: [0, 2000, 6000, 3000, 4000, 5000, 8000],
            borderColor: 'green',
            fill: false,
            tension: 0.3
          },
          {
            label: 'Medical Enquiries',
            data: [0, 1500, 5000, 3500, 4200, 6200, 7000],
            borderColor: 'orange',
            fill: false,
            tension: 0.3
          },
          {
            label: 'Total Patients',
            data: [0, 500, 2000, 2500, 3000, 3500, 4000],
            borderColor: 'red',
            fill: false,
            tension: 0.3
          }
        ]
      }
    });
  }
  logout() {
    this.authService.logout();
  }
}
