import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-collaborator',
  templateUrl: './item-collaborator.component.html',
  styleUrls: ['./item-collaborator.component.scss']
})
export class ItemCollaboratorComponent implements OnInit {

  @Input() collab : any;

  constructor() { }

  ngOnInit(): void {

  }

}
