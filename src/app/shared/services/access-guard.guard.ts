import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardGuard implements CanActivate {
  
  constructor(private tokenStorageService:TokenStorageService,private globalService:GlobalService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
      if (this.globalService.isLoggedIn()==true && this.tokenStorageService.getUser().adminRight == false){
        return true
      }else {
        this.router.navigate(['/home']);
        return false;
      }
  }
  
  
}
