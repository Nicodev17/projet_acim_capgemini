import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/shared/interfaces/people';
import { MatDialog } from '@angular/material/dialog';
import { FormAddAdminComponent } from '../form-add-admin/form-add-admin.component';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  admins : People[] = [];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  onClickOpenFormAddAdmin(){
    this.matDialog.open(FormAddAdminComponent); //Pour afficher form-add-admin en pop-up
  }

}
