import { Component, OnInit, Input } from '@angular/core';
import { FormAddAdminComponent } from '../form-add-admin/form-add-admin.component';
import { User } from 'src/app/shared/interfaces/user';
import { SimpleModalComponent } from "ngx-simple-modal";

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : User[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }


}
