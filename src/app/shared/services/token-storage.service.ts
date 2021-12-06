import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  

  constructor() { }

  signOut() : void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    // console.log("token :"+token);
  }

  public getToken(): string | null {
    // console.log("TOKEN_KEY :" + window.sessionStorage.getItem(TOKEN_KEY))
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    // console.log("User sauvé :"+user)
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log("USER_KEY :" +window.sessionStorage.getItem(USER_KEY))
    if (user!=null) {
      // console.log("objet : "+JSON.parse(user))    
      return JSON.parse(user);    
    }
    return {};
  }

}