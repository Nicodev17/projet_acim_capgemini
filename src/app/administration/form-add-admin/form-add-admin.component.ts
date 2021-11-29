import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ListAdminComponent } from '../list-admin/list-admin.component';

@Component({
  selector: 'app-form-add-admin',
  templateUrl: './form-add-admin.component.html',
  styleUrls: ['./form-add-admin.component.scss']
})
export class FormAddAdminComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ListAdminComponent>) { 
    
  }

  ngOnInit(): void {
  }

  onClickCloseWindow(){
    this.matDialogRef.close();
  }
}
