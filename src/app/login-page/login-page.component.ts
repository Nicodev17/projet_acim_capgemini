import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authRole = new FormGroup({
    role: new FormControl('', Validators.required)
  });

  constructor() { }

  // Traitement du formulaire de connexion à la soumission
  onSubmit() {
    let roleChoice = this.authRole.value.role;    

    if(roleChoice == "admin") {
      console.log('role admin choisi');
      /* ROUTE VERS LE DASHBOARD ADMIN ICI */
    } else if(roleChoice == "collab") {
      console.log('role collab choisi');
      /* ROUTE VERS LE DASHBOARD COLLAB ICI */
    }
  }

  ngOnInit(): void {
  }

}
