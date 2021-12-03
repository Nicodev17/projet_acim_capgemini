import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  undoBtnOnClick(){    
    this.router.navigateByUrl('/list-admin');
  }
}
