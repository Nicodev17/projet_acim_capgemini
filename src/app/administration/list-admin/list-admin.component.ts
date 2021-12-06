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

  constructor(private router: Router, private service : GlobalService) { }
  
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
    // this.service.getProfils().subscribe(resultFromAPI => {
    //   // Ici il faudra mappé sur la table authorities ne prendre que les user avec le admin_right true. (a faire dans la requete du service)
    //   this.arrayAdmin = resultFromAPI;
    // });
  }

}
