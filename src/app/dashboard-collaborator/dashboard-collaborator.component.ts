import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-collaborator',
  templateUrl: './dashboard-collaborator.component.html',
  styleUrls: ['./dashboard-collaborator.component.scss']
})
  export class DashboardCollaboratorComponent implements OnInit {
  isModified: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log();
    
  }

  modifToggle() {
    this.isModified = true;    
  }

  cancelToggle() {
    this.isModified = false;    
  }
}
