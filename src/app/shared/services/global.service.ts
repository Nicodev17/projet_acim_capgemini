import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
import { Question } from '../interfaces/question';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  subjectCollabId= new Subject<number>();

  constructor(private http: HttpClient, private tokenStorageService : TokenStorageService) { }

  login (username : string, password: string): Observable<any> {
    
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  createUser(user:string): Observable<any> {
    return this.http.post(AUTH_API + 'create-user',user, httpOptions);
  }

  createIntermission(intermission:string): Observable<any>{
    return this.http.post(AUTH_API + 'create-intermission',intermission , httpOptions);
  }


  getCollabo (): Observable<any> {
        return this.http.get(AUTH_API + 'get-all-collabo', httpOptions);
  }

  getAdmin (): Observable<any> {
    return this.http.get(AUTH_API + 'get-all-admin', httpOptions);
  }  

  getUserById(id:number): Observable<any>{
    return this.http.get(AUTH_API + 'get-user-by-id/'+id);
  }


  isLoggedIn () : boolean {
    if(this.tokenStorageService.getToken()==null){
      return false;
    }else{return true;}
  }

  getIntermission (): Observable<any> {
    return this.http.get(AUTH_API + 'home', httpOptions);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(AUTH_API + `question/all`);
  }
  
  postResponse(response: string): Observable<Response> {
    return this.http.post<Response>(AUTH_API + `response`, response, httpOptions);
  }

  videoAdded() {
    
  }
  

}



