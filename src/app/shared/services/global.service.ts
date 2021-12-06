import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  constructor(private http: HttpClient, private tokenStorageService : TokenStorageService) { }

  login (username : string, password: string): Observable<any> {
    
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }


  isLoggedIn () : boolean {
    if(this.tokenStorageService.getToken()==null){
      return false;
    }else{return true;}
  }
}



