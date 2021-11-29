import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-profil',
  templateUrl: './item-profil.component.html',
  styleUrls: ['./item-profil.component.scss']
})
export class ItemProfilComponent implements OnInit {

  @Input() profil: any;
  buttonValue: String = "Envoyer le quiz";

  constructor() { }

  getColor(formstate: any) {
    switch (formstate) {
      case "ok": 
        return 'rgb(166, 214, 95)';
      case "not": 
        return 'rgb(233, 91, 91)';
      case "waiting": 
        return 'rgb(255, 159, 70)';
      default: 
        return;
    }
  }

  ngOnInit(): void {
    if(this.profil.formstate === "ok") {
      this.buttonValue = "Voir les réponses";
    } else if (this.profil.formstate === "waiting") {
      this.buttonValue = "En attente..."
    }
  }

}
