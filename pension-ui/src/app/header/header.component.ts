import { SubscribeService } from './../subscribe.service';
import { Component, OnInit } from '@angular/core';
import { faHouseChimney, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { loggedIn } from './../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  homeIcon = faHouseChimney;
  userIcon = faUser;
  signupIcon = faUserPlus;
  profileIcon = faUserPen;
  appIcon = faAppStore;
  loginIcon = faUserCircle;
  contactIcon = faContactCard;

  loginStatus = loggedIn;

  constructor(private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    this.subscribeService.assignValue(loggedIn).subscribe((result) => {
      this.loginStatus = loggedIn;
    });
  }

  // ngClick() {
  //   this.subscribeService.assignValue().subscribe((result) => {
  //     alert(result);
  //   });
  // }

}
