import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile-section/profile/profile.component';
import { UpdateProfileComponent } from './profile-section/update-profile/update-profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { SubscribeService } from './subscribe.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    AboutComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    // ProductListComponent,
    // ProductDetailComponent,
    ProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    HttpClientModule
    // InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [AuthService, AuthGuardService, SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }