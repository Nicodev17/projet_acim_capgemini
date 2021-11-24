import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  userSubject = new Subject<User>()
  user ?: User

  constructor() { 
    this.user=undefined
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



