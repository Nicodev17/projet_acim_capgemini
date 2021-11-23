import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  userSubject = new Subject<People>()

  constructor() { }

  login (people : People){
    this.userSubject.next(people)
  }
}



