import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-item-collaborator',
  templateUrl: './item-collaborator.component.html',
  styleUrls: ['./item-collaborator.component.scss']
})
export class ItemCollaboratorComponent implements OnInit {
  
  @Input() collab : User | undefined;
  @Output() collabId : number | undefined;

  constructor(private router:Router, private globalService:GlobalService) { }

  ngOnInit(): void {  }
  
  getColloboratorId(){
    if(this.collab){
      this.router.navigate(["/form-add-intermission", this.collab.id]);
    } 
    
        
  }
  
}
