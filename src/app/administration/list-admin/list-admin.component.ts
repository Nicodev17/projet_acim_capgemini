import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})

export class ListAdminComponent implements OnInit {

  arrayAdmin : User[] = [];

  constructor(private router: Router, private globalService : GlobalService) { }
  
  addBtnOnClick(){
    this.router.navigateByUrl('/form-add-user');
  }
  
  deleteAdmin() {
    let delVerif = prompt("Etes vous sûr de vouloir supprimer cet admin ? Si oui tapez 'oui' sinon annulez.");
    
    if(delVerif === "oui") {
      // autoriser l'appel au delete en BDD via une requete par le service
      
    }
  }

  ngOnInit(): void {
    this.globalService.getAdmin().subscribe(
      data=> {
        this.arrayAdmin=data;
        // console.log(data)
      });
  }
  

}
