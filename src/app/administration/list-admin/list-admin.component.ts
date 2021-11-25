import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

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
