import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../shared/services/global.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: any= {
    username:null,
    password:null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  jwt=null;
  id= null;
  adminRight: boolean = false;

  constructor(private globalService:GlobalService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.adminRight = this.tokenStorage.getUser().adminRight;
    }
  }


  onSubmit(): void {
    const {username, password} = this.form;
    // console.log(this.form)

    this.globalService.login(username, password).subscribe(
      data=> {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.adminRight = this.tokenStorage.getUser().adminRight;
        this.id=this.tokenStorage.getUser().id;
        this.jwt=this.tokenStorage.getUser().jwt;
        // console.log(data);
        // console.log("adminRight : "+ this.adminRight);
        // console.log("id : "+ this.id);
        // console.log(this.tokenStorage.getToken());

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;  
        console.log(err)      
      }
    );
  }

}
