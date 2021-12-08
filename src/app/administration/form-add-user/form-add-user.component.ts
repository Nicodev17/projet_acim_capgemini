import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})

export class FormAddUserComponent implements OnInit {
  randomPassword: String = '';
  display: String = 'none';

  form: any = {
    lastname:null,
    firstname:null,
    email:null,
    job:null,
    password:null,
    authorities:{
      id:null
    }    
  };

  constructor(private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void { }

  onSubmit() {
    const {lastname,firstname,email,job,id,password} = this.form;

    JSON.stringify(this.form)
    this.globalService.createUser(JSON.stringify(this.form)).subscribe();

    // Affichage du message d'ajout
    this.display = 'block';
    
    setTimeout(() => {
      this.display = 'none';
      this.router.navigateByUrl('/list-collaborator');
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
    this.form.password = randomString;
  }
}
