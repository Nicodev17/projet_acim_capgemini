import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-profil',
  templateUrl: './item-profil.component.html',
  styleUrls: ['./item-profil.component.scss']
})
export class ItemProfilComponent implements OnInit {

  @Input() profil: any;

  constructor() { }

  ngOnInit(): void {
  }

}
