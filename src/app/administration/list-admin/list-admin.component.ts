import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/shared/interfaces/people';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : People[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
