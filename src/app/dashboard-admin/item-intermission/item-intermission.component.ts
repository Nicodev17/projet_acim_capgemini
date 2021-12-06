import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-intermission',
  templateUrl: './item-intermission.component.html',
  styleUrls: ['./item-intermission.component.scss']
})
export class ItemIntermissionComponent implements OnInit {

  @Input() intermission: any;
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
    if(this.intermission.formstate === "ok") {
      this.buttonValue = "Voir les réponses";
    } else if (this.intermission.formstate === "waiting") {
      this.buttonValue = "En attente...";
    }
  }

}
