import { Component, OnInit, Input } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : Admin[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
