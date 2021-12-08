import { Component, OnInit} from '@angular/core';
import { Question} from 'src/app/shared/interfaces/question';
import { Response} from 'src/app/shared/interfaces/response';
import { ApiService} from 'src/app/shared/services/api.service';
import { FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';
import { Intermission } from 'src/app/shared/interfaces/intermission';
import { User } from 'src/app/shared/interfaces/user';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-form-collaborator-situation',
  templateUrl: './form-collaborator-situation.component.html',
  styleUrls: ['./form-collaborator-situation.component.scss']
})
export class FormCollaboratorSituationComponent implements OnInit {

  questions: Question[] = [];
  firstIntermission: boolean = true;
  intermission: Intermission = {} as Intermission;

  constructor(private globalService : GlobalService, private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

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
      this.globalService.postResponse(JSON.stringify(response2)).subscribe();
    }
    this.globalService.postResponse(JSON.stringify(response3)).subscribe();

    this.router.navigate(['/form/latest'])
  }

  ngOnInit(): void {
    this.globalService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
    this.globalService.getIntermission().subscribe(intermissionFromApi => this.intermission = intermissionFromApi); }

}