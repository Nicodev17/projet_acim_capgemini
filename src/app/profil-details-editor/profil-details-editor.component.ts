import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-details-editor',
  templateUrl: './profil-details-editor.component.html',
  styleUrls: ['./profil-details-editor.component.scss']
})
export class ProfilDetailsEditorComponent implements OnInit {

  isModified: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  modifToggle() {
    this.isModified = true;    
  }

  cancelToggle() {
    this.isModified = false;    
  }
}
