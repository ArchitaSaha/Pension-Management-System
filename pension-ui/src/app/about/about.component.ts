import { Component, OnInit } from '@angular/core';
import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  icon = faHandHoldingHand;
  constructor() { }

  ngOnInit(): void {
  }

}
