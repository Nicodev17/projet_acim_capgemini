import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authRole = new FormGroup({
    role: new FormControl('', Validators.required)
  });

  constructor(private globalService:GlobalService) { }

  

  // Traitement du formulaire de connexion à la soumission
  onSubmit() {
     
    let user = {
      id : 1,
      lastname : "Bouillon",
      firstname : "Antoine",
      right : true ,
      email : "antoine@yopmail.com",
      password : "password"
    };
    let user2 = {
      id : 2,
      lastname : "Tulipe",
      firstname : "Celine",
      right : false,
      email : "celine@yopmail.com",
      password : "password"
    };

    this.globalService.login(user);
  }

  ngOnInit(): void {
  }

}
