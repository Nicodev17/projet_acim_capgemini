import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/interfaces/user';
import { GlobalService } from '../shared/services/global.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-profil-details-editor',
  templateUrl: './profil-details-editor.component.html',
  styleUrls: ['./profil-details-editor.component.scss']
})
export class ProfilDetailsEditorComponent implements OnInit {
  collabId?:number;
  collab?:User;
  isModified: Boolean = false;

  constructor(private route:ActivatedRoute, private tokenStorage: TokenStorageService, private globalService: GlobalService) { }

  ngOnInit(): void { 
    const paramCollabId = this.route.snapshot.paramMap.get('collabId');
    if(paramCollabId != null) {
      this.collabId=parseInt(paramCollabId)
      this.globalService.getUserById(this.collabId).subscribe(data => {
        this.collab = data;
        console.log(this.collab);
      });
    }
  }


  modifToggle() {
    this.isModified = true;    
  }

  cancelToggle() {
    this.isModified = false;    
  }
}
