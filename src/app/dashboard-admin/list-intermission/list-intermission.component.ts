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

  calledArrayIntermission: Intermission[] = [];
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

  filterList(value: any) {
    this.arrayIntermission = this.calledArrayIntermission;
    let filter = value.filter.state;

    let arrayfilter = this.arrayIntermission.filter(inter => inter.responseSend === true);

    /* if(filter === 'ok') {
      this.arrayFilter = this.arrayIntermission.filter(inter => {
        inter.responseSend != true;
      });
      console.log(this.arrayFilter);
    } else if (filter === 'waiting') {

    } else if (filter === 'not') {

    } */

    

    if(filter != undefined) {
      this.arrayIntermission = arrayfilter;
    }

    //console.log(this.arrayIntermission);

    /* this.arrayIntermission.forEach(element => {
      let respState = element.responseSend;
      let sendState = element.sendDateForm;

      if(respState) {
        //form repondu
      } else if(sendState && !respState) {
        //form envoyé mais non repondu
      } else if (!sendState) {
        //form pas envoyé
      }
    }); */
      

    //console.log(arrayfilter);

  }
  
  ngOnInit(): void {

    this.globalService.getIntermission().subscribe( data=> {
      this.calledArrayIntermission = data;

      this.arrayIntermission = this.calledArrayIntermission;
      console.log(this.arrayIntermission);
    });

    //------------


    // this.service.getProfils().subscribe(resultFromAPI => {
    //   this.calledArrayProfils = resultFromAPI;

    //   this.arrayProfils = this.calledArrayProfils;
  
    //   console.log(this.arrayProfils);
    // });
  }

}
