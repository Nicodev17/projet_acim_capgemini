import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  constructor(private http: HttpClient) { }

  serverUrlProfils = environment.serverUrlProfils;
  userSubject = new Subject<User>()
  arrayProfils: User[] = [];


  login (user : User){
    this.userSubject.next(user)
  }

  getProfils(): Observable<User[]> {
    return this.http.get<User[]>(this.serverUrlProfils)
  }

}



