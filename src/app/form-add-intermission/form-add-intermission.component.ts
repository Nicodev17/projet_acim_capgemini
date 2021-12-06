import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-intermission',
  templateUrl: './form-add-intermission.component.html',
  styleUrls: ['./form-add-intermission.component.scss']
})
export class FormAddIntermissionComponent implements OnInit {

  display: String = 'none';

  addIntermission = new FormGroup({
    nameLastMission: new FormControl('', Validators.required),
    dateLastMission: new FormControl('', Validators.required),
  });

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    let nameLastMission = this.addIntermission.value.nameLastMission;
    let dateLastMission = this.addIntermission.value.dateLastMission;

    //Verif des entrées (test only)
    console.log(nameLastMission, dateLastMission);

    // Affichage du message d'ajout
    this.display = 'block';
    this.addIntermission.reset();
    
    setTimeout(() => {
      this.router.navigateByUrl('/list-collaborator');
    }, 1500)
  }

}
