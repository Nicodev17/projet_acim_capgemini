import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-admin',
  templateUrl: './form-add-admin.component.html',
  styleUrls: ['./form-add-admin.component.scss']
})
export class FormAddAdminComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  undoBtnOnClick(){
    this.router.navigateByUrl('/list-admin');
  }
}
