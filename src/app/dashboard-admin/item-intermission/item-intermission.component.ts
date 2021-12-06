import { Component, Input, OnInit } from '@angular/core';
import { Intermission } from 'src/app/shared/interfaces/intermission';

@Component({
  selector: 'app-item-intermission',
  templateUrl: './item-intermission.component.html',
  styleUrls: ['./item-intermission.component.scss']
})
export class ItemIntermissionComponent implements OnInit {

  @Input() intermission: Intermission = {} as Intermission;
  buttonValue: String = "Envoyer le quiz";

  constructor() { }

  getColor(intermission: Intermission) {

    if(intermission.responseSend){
      return 'rgb(166, 214, 95)';
    }else{if(intermission.sendDateForm!=null){
      return 'rgb(255, 159, 70)';
    } return 'rgb(233, 91, 91)';
    }







    // switch (intermission.responseSend, intermission.sendDateForm) {
    //   case "ok": 
    //     return 'rgb(166, 214, 95)';
    //   case "not": 
    //     return 'rgb(233, 91, 91)';
    //   case "waiting": 
    //     return 'rgb(255, 159, 70)';
    //   default: 
    //     return;
    // }
  }

  ngOnInit(): void {
    if(this.intermission.responseSend) {
      this.buttonValue = "Voir les réponses";
    } else if (this.intermission.sendDateForm != null && this.intermission.responseSend) {
      this.buttonValue = "En attente...";
    }
  }

}
