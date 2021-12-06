import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { Response } from '../interfaces/response';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Intermission } from '../interfaces/intermission';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.serverURL}/question/all`);
  }
  
  postResponse(response: Response): Observable<Response> {
    return this.httpClient.post<Response>(`${this.serverURL}/response`, response);
  }

  getIntermission(id: Number): Observable<Intermission> {
    return this.httpClient.get<Intermission>(`${this.serverURL}/intermission/${id}`);
  }
}