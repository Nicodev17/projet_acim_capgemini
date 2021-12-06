import { Component, OnInit} from '@angular/core';
import { Question} from 'src/app/shared/interfaces/question';
import { Response} from 'src/app/shared/interfaces/response';
import { ApiService} from 'src/app/shared/services/api.service';
import { FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';
import { Intermission } from 'src/app/shared/interfaces/intermission';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-form-collaborator-situation',
  templateUrl: './form-collaborator-situation.component.html',
  styleUrls: ['./form-collaborator-situation.component.scss']
})
export class FormCollaboratorSituationComponent implements OnInit {

  questions: Question[] = [];
  firstIntermission: boolean = true;
  intermission: Intermission = {} as Intermission;

  // user: User = {
  // id : 1,
  //   lastname : "Toto",
  //   firstname : "Titi",
  //   right : false , //référence la table Authorities dans la bdd
  //   email : "mail@mail",
  //   password : "mdp",
  //   job : "string",
  //   formstate : "string",
  // }
  // intermission: Intermission = {
  //   id : 2,
  //   staffingPartner: this.user,
  //   collaborator: 1,
  //   lastMissionName: "",
  //   beginIntermission: new Date(),
  //   endingIntermission: new Date(),
  //   sendDateForm: new Date()
  // }

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  situationForm = this.fb.group({
    rep2text: [], rep3text: [],
  });

  onSubmit() {

    let response3: Response = {
      id: -1,
      response: this.situationForm.value['rep3text'],
      responseDateForm: new Date(),
      intermission: this.intermission,
      question: this.questions[2]
    };

    let response2: Response = {
      id: -1,
      response: this.situationForm.value['rep2text'],
      responseDateForm: new Date(),
      intermission: this.intermission,
      question: this.questions[1]
    };

    if(response2.response != null) {
      this.apiService.postResponse(response2).subscribe();
    }
    this.apiService.postResponse(response3).subscribe();

    this.router.navigate(['/form/latest'])
  }

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
    this.apiService.getIntermission(2).subscribe(intermissionFromApi => this.intermission = intermissionFromApi); }

}