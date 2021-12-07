import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-form-add-intermission',
  templateUrl: './form-add-intermission.component.html',
  styleUrls: ['./form-add-intermission.component.scss']
})
export class FormAddIntermissionComponent implements OnInit {

  collabId?:number;

  form: any= {    
    lastMissionName:null,
    beginIntermission:null,
  };

     

  form2: any= {
    staffingPartner:{
      id:null
    },
    collaborator:{
      id:null
    },
    lastMissionName:null,
    beginIntermission:null    
  };
  
  display: String = 'none';

  // addIntermission = new FormGroup({
  //   nameLastMission: new FormControl('', Validators.required),
  //   dateLastMission: new FormControl('', Validators.required),
  // });

  constructor(private router: Router, private globalService:GlobalService, private route:ActivatedRoute, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {}

  onSubmit() {
    const lastMissionName=this.form.lastMissionName;
    const beginIntermission=this.form.beginIntermission;
    // const staffingPartner=this.tokenStorage.getUser().id;
    
    

    
    

    const paramCollabId = this.route.snapshot.paramMap.get('collabId');
    if(paramCollabId != null) {
      this.collabId=parseInt(paramCollabId)

      this.form2.collaborator.id=this.collabId;
      this.form2.staffingPartner.id=this.tokenStorage.getUser().id;
      this.form2.lastMissionName=lastMissionName;
      this.form2.beginIntermission=beginIntermission;

      console.log(JSON.stringify(this.form2));
      this.globalService.createIntermission(JSON.stringify(this.form2)).subscribe()
      
    }


    // Affichage du message d'ajout
    this.display = 'block';
    // this.addIntermission.reset();
    
    setTimeout(() => {
      this.router.navigateByUrl('/list-collaborator');
    }, 1500)
  }

}
