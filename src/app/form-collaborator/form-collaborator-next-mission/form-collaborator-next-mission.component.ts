import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/interfaces/question';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form-collaborator-next-mission',
  templateUrl: './form-collaborator-next-mission.component.html',
  styleUrls: ['./form-collaborator-next-mission.component.scss']
})
export class FormCollaboratorNextMissionComponent implements OnInit {

  questions: Question[] = [];
  firstIntermission: boolean =true;
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
  }

}
