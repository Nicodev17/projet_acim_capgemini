import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Intermission } from 'src/app/shared/interfaces/intermission';
import { Question } from 'src/app/shared/interfaces/question';
import { Response} from 'src/app/shared/interfaces/response';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-form-collaborator-latest-mission',
  templateUrl: './form-collaborator-latest-mission.component.html',
  styleUrls: ['./form-collaborator-latest-mission.component.scss']
})
export class FormCollaboratorLatestMissionComponent implements OnInit {

  questions: Question[] = [];
  intermission: Intermission = {} as Intermission;
  
  constructor(private globalService : GlobalService, private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  latestForm = this.fb.group({
    4: [], 5: [], 6: []
  })

  onSubmit() {

    for (let i = 4; i <= 6 ; i++) {
      let response: Response = {
        id: -1,
        response: this.latestForm.value[i],
        responseDateForm: new Date(),
        intermission: this.intermission,
        question: this.questions[i-1]
      };
      this.globalService.postResponse(JSON.stringify(response)).subscribe();
    }

    this.router.navigate(['/form/next'])
  }

  ngOnInit(): void {
    this.globalService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
    this.globalService.getIntermission().subscribe(intermissionFromApi => this.intermission = intermissionFromApi); 
  }
}



