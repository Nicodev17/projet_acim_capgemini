import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  constructor(private http: HttpClient) { 
    this.user=undefined
  }

  serverUrlProfils = environment.serverUrlProfils;
  userSubject = new Subject<User>();
  arrayProfils: User[] = [];
  user ?: User

  getProfils(): Observable<User[]> {
    return this.http.get<User[]>(this.serverUrlProfils)
  }

  login (user : User){
    this.user = user
    // hhtpClient
  }

  isLoggedIn () : boolean {
    if(this.user===undefined){
      return false;
    }else{return true;}
  }

  isAdmin () : boolean {
    if (this.user!== undefined){
      return this.user.right;
    }else{return false;}
  }

  isUser () : boolean {
    if (this.user!== undefined){
      return !this.user.right;
    }else{return false;}
  }
}



