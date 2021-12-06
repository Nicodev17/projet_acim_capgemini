import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/shared/interfaces/user';
import { GlobalService } from 'src/app/shared/services/global.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {

  calledArrayProfils: User[] = [];
  arrayProfils: User[] = [];

  filterOptions: any[] = [
    { id: 0, name: '-- Filtrer par statut --' },
    { id: 1, name: 'Formulaire rempli', state: 'ok' },
    { id: 2, name: 'Formulaire en attente de réponse', state: 'waiting' },
    { id: 3, name: 'Formulaire non envoyé', state: 'not' }
  ];

  constructor(private service : GlobalService) {}

  form = new FormGroup({
    filter: new FormControl(this.filterOptions[0]),
  });

  filterList(value: any) {
    this.arrayProfils = this.calledArrayProfils;
    let filter = value.filter.state;
    
    let arrayfilter = this.arrayProfils.filter(profil => profil.formstate === filter);

    if(filter != undefined) {
      this.arrayProfils = arrayfilter;
    }
  }
  
  ngOnInit(): void {
    // this.service.getProfils().subscribe(resultFromAPI => {
    //   this.calledArrayProfils = resultFromAPI;

    //   this.arrayProfils = this.calledArrayProfils;
  
    //   console.log(this.arrayProfils);
    // });
  }

}
