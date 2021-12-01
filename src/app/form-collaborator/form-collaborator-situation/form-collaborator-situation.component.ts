import {
  Component,
  OnInit
} from '@angular/core';
import {
  Question
} from 'src/app/shared/interfaces/question';
import {
  ApiService
} from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form-collaborator-situation',
  templateUrl: './form-collaborator-situation.component.html',
  styleUrls: ['./form-collaborator-situation.component.scss']
})
export class FormCollaboratorSituationComponent implements OnInit {

  questions: Question[] = [];
  firstIntermission: boolean =true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe(resultFromAPI => this.questions = resultFromAPI);
  }

}
