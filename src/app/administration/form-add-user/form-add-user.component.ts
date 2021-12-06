import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})

export class FormAddUserComponent implements OnInit {
  
  randomPassword: String = '';
  display: String = 'none';

  addUser = new FormGroup({
    lastname: new FormControl('', [Validators.required, ]),
    firstname: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
    userRole: new FormControl('', Validators.required),
    adminRole: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    let lastname = this.addUser.value.lastname;
    let firstname = this.addUser.value.firstname;
    let mail = this.addUser.value.mail;
    let password = this.addUser.value.password;
    let job = this.addUser.value.job;
    let userRole = this.addUser.value.userRole;

    //Verif des entrées (test only)
    console.log(lastname, firstname, mail, password, job, userRole);
    
    // envoi de la requete de création du user au server ici
    // ---

    // Affichage du message d'ajout
    this.display = 'block';
    this.addUser.reset();
    
    setTimeout(() => {
      this.display = 'none';
    }, 1500)
  }

  undoBtnOnClick() {    
    this.router.navigateByUrl('/home');
  }

  generateRandomString() {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = Math.random().toString(36).slice(-8);       
      return result;
  }

  generatePassword() {
    const randomString = this.generateRandomString();
    this.randomPassword = randomString;
    this.addUser.value.password = randomString;
  }
}
