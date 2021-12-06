import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { GlobalService } from 'src/app/shared/services/global.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Intermission } from 'src/app/shared/interfaces/intermission';

@Component({
  selector: 'app-list-intermission',
  templateUrl: './list-intermission.component.html',
  styleUrls: ['./list-intermission.component.scss']
})
export class ListIntermissionComponent implements OnInit {

  calledArrayProfils: Intermission[] = [];
  arrayIntermission: Intermission[] = [];

  filterOptions: any[] = [
    { id: 0, name: '-- Filtrer par statut --' },
    { id: 1, name: 'Formulaire rempli', state: 'ok' },
    { id: 2, name: 'Formulaire en attente de réponse', state: 'waiting' },
    { id: 3, name: 'Formulaire non envoyé', state: 'not' }
  ];

  constructor(private globalService : GlobalService) {}

  form = new FormGroup({
    filter: new FormControl(this.filterOptions[0]),
  });

  // filterList(value: any) {
  //   this.arrayIntermission = this.calledArrayProfils;
  //   let filter = value.filter.state;
    
  //   let arrayfilter = this.arrayIntermission.filter(profil => profil.formstate === filter);

  //   if(filter != undefined) {
  //     this.arrayIntermission = arrayfilter;
  //   }
  // }
  
  ngOnInit(): void {

    this.globalService.getIntermission().subscribe(
      data=> {
        this.arrayIntermission=data;
        console.log(data)
      }
    )
    // this.service.getProfils().subscribe(resultFromAPI => {
    //   this.calledArrayProfils = resultFromAPI;

    //   this.arrayProfils = this.calledArrayProfils;
  
    //   console.log(this.arrayProfils);
    // });
  }

}
