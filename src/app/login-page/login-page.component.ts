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
    let roleChoice = this.authRole.value.role;
    let user = {
      id : 1,
      lastname : "Bouillon",
      firstname : "Antoine",
      right : true ,
      email : "antoine@yopmail.com",
      password : "password",
      job : "dev",
      formstate : "ok"
    };
    let user2 = {
      id : 2,
      lastname : "Tulipe",
      firstname : "Celine",
      right : false,
      email : "celine@yopmail.com",
      password : "password",
      job : "dev",
      formstate : "ok"
    };

    if(roleChoice == "admin") {
      console.log('role admin choisi');
      this.globalService.login(user);
    } else if(roleChoice == "collab") {
      console.log('role collab choisi');
      this.globalService.login(user2);
    }
  }

  ngOnInit(): void {
  }

}
