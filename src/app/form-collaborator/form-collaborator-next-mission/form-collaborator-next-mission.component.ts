import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Intermission } from 'src/app/shared/interfaces/intermission';
import { Question } from 'src/app/shared/interfaces/question';
import { Response} from 'src/app/shared/interfaces/response';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-form-collaborator-next-mission',
  templateUrl: './form-collaborator-next-mission.component.html',
  styleUrls: ['./form-collaborator-next-mission.component.scss']
})
export class FormCollaboratorNextMissionComponent implements OnInit {

  questions: Question[] = [];
  intermission: Intermission = {} as Intermission;

  constructor(private globalService : GlobalService, private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  nextForm = this.fb.group({
    7: [], 8: [], 9: []
  })

  onSubmit() {

    for (let i = 7; i <= 9 ; i++) {
      let response: Response = {
        id: -1,
        response: this.nextForm.value[i],
        responseDateForm: new Date(),
        intermission: this.intermission,
        question: this.questions[i-1]
      };
      this.globalService.postResponse(JSON.stringify(response)).subscribe();
      this.intermission.responseSend = true;
      console.log(response);
      
    }

    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
    this.globalService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
    this.globalService.getIntermission().subscribe(intermissionFromApi => this.intermission = intermissionFromApi);
  }

}
