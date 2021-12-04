import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/interfaces/question';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form-collaborator-latest-mission',
  templateUrl: './form-collaborator-latest-mission.component.html',
  styleUrls: ['./form-collaborator-latest-mission.component.scss']
})
export class FormCollaboratorLatestMissionComponent implements OnInit {

  questions: Question[] = [];
  //questionsF: Question[] = [];
  firstIntermission: boolean =true;
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
  }

}
