import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
	user: User;
	pensioner: any;

	errorStatus: string | null | undefined;

	submitted = false;

	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient)
	{
		this.user = new User();
	}

	ngOnInit(): void {}

	onSubmit()
	{
    // alert(this.user.username);
		this.submitted = true;
		this.http.post('http://localhost:8003/pension/post', {
			username: this.user.username,
			password: this.user.password,
			aadhaarNumber: this.user.aadhaar,
			name: this.user.name,
			dob: this.user.dob,
			pan: this.user.pan,
			salaryEarned: this.user.salary,
			allowances: this.user.allowances,
			pensionType: this.user.pensionType,
			bankType: this.user.bankType
		}).subscribe(
			(response: any) => {
				this.pensioner = response;
				// alert(JSON.stringify(response));
				this.changePage();
			},
			(error) => {
				this.errorStatus = error;
				// 	(JSON.stringify(error));
				this.changePage();
			}
    	);
  	}

  	changePage()
	{
		// alert("|"+this.pensioner+"|");
		if(this.pensioner !== undefined)
		{
			alert("User registered successfully. Please proceed for login.");
			this.router.navigate(['/login']);
		}
		else
		{
			alert("User registration failed.");
		}
	}
}