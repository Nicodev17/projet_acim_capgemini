import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAddAdminComponent } from '../form-add-admin/form-add-admin.component';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : User[] = [];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  onClickOpenFormAddAdmin(){
    this.matDialog.open(FormAddAdminComponent); //Pour afficher form-add-admin en pop-up
  }

}
