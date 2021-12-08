import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intermission } from 'src/app/shared/interfaces/intermission';

@Component({
  selector: 'app-item-intermission',
  templateUrl: './item-intermission.component.html',
  styleUrls: ['./item-intermission.component.scss']
})
export class ItemIntermissionComponent implements OnInit {

  @Input() intermission: Intermission = {} as Intermission;

  buttonValue: String = "Envoyer le quiz";

  constructor(private router: Router) { }

  getColor(intermission: Intermission) {

    if(intermission.responseSend){
      return 'rgb(166, 214, 95)';
    }else{if(intermission.sendDateForm!=null){
      return 'rgb(255, 159, 70)';
    } return 'rgb(233, 91, 91)';
    }
  }

  seeProfil(collabId: number) {
    console.log(collabId);
    let id =collabId.toString()
    console.log(this.router.navigateByUrl('/profil-details-editor/'+ id));
    
    
    this.router.navigateByUrl('/profil-details-editor/'+ id)
  }

  ngOnInit(): void {
    if(this.intermission.responseSend) {
      this.buttonValue = "Voir les réponses";
    } else if (this.intermission.sendDateForm != null && this.intermission.responseSend) {
      this.buttonValue = "En attente...";
    }
  }

}
