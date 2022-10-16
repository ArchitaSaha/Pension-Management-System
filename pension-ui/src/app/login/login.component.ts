import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SubscribeService } from '../subscribe.service';

export var aadhaarExport: string;
export var loggedIn: boolean = false;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	pensioner:{ uname: string, pass: string, aadhaar: string} = {uname: '', pass: '', aadhaar: ''};

	user: any;

	errorStatus: string | undefined;

	// loggedIn = false;

	constructor(private http: HttpClient, private router: Router, private authService: AuthService, private subscribeService: SubscribeService) { }

	ngOnInit(): void {}

	onLogin(): void
	{
	    this.http.post('http://localhost:8003/pension/login', {
	        username: this.pensioner.uname,
	        password: this.pensioner.pass
		}).subscribe(
      		(response: any) => {
        		this.user = response;
				aadhaarExport = ""+this.user;
		        this.changePage();
      	}, (error) => {
	        this.errorStatus = error;
	        this.changePage();
      	});
		aadhaarExport = ""+this.user;
	}
  
	changePage()
  	{
    	// if(this.user.status === 202)
		if(this.user != undefined)
	    {
			// loggedIn = !loggedIn;

			this.subscribeService.assignValue(loggedIn).subscribe((result) => {
				// alert(result);
				loggedIn = !loggedIn;
				// alert(loggedIn);
			});
			
			this.authService.login();
    		this.router.navigate(['/profile']);
	    }
	    else
	    {
      		alert('Incorrect Credentials');
	    }
  	}
}