import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './core/auth/auth.guard';
import { GeneralEnquiryComponent } from './general-enquiry/general-enquiry.component';
import { GeriatricCareComponent } from './geriatric-care/geriatric-care.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { MedicalTourismComponent } from './medical-tourism/medical-tourism.component';
import { PackagesComponent } from './packages/packages.component';
import { BrochuresComponent } from './brochures/brochures.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'layout', loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), canActivate: [AuthGuard] },
 { path: 'general-enquiry', component: GeneralEnquiryComponent },
  { path: 'geriatric-care', component: GeriatricCareComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'medical-tourism', component: MedicalTourismComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'brochures', component: BrochuresComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: '', redirectTo: 'layout', pathMatch: 'full' }
];
