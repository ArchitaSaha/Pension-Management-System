import { LoginComponent, aadhaarExport } from './../../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	pensioner: any;
	submitted = false;

	constructor(private http: HttpClient)
	{
		this.loadProfile();
	}

	ngOnInit(): void
	{
		// this.loadProfile();
	}

	loadProfile()
	{
		let url1 = 'http://localhost:8003/pension/profile-details/'.concat(aadhaarExport);
		// alert(url1);
		this.http.get(url1).subscribe(
			(response) => {
				// alert("url1" + JSON.stringify(response));
				this.pensioner = response;
			}
		);
	}

	calculatePension()
	{
		this.submitted = true;
		// submit = true;
		let url2 = "http://localhost:8001/pension/calculate-pension/".concat(aadhaarExport);
		let url3 = "http://localhost:8003/pension/complete-details/".concat(aadhaarExport);

		this.http.get(url2).subscribe(
			(response) => {
				// alert("url2" + JSON.stringify(response))
			}
		);

		this.http.get(url3).subscribe(
			(response) => {
				// alert("url3" + JSON.stringify(response));
				this.pensioner = response;
			}
		);
	}
}