import { Component, OnInit, Input } from '@angular/core';
import { FormAddUserComponent } from '../form-add-user/form-add-user.component';
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : User[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  addBtnOnClick(){
    this.router.navigateByUrl('/form-add-user');
  }
}
