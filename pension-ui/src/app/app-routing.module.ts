import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile-section/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

// import { ProductListComponent } from "./product-list/product-list.component";
// import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Pension Management System - Home' },
  { path: 'home', redirectTo: ''},
  { path: 'about', component: AboutComponent, title: 'About Pension Management System' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'signup', component: SignupComponent, title: 'Sign Up' },
  { path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent, title: 'Profile' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'not-found', component: PageNotFoundComponent, title: 'Page Not Found' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }