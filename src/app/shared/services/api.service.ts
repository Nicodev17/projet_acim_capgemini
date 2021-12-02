import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverURL = 'http://localhost:8888';

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.serverURL}/question/all`)
  }

}