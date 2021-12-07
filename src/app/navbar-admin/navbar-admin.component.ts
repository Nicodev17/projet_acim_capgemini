import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService, private globalService : GlobalService) { }

  isLoggedIn() : boolean {
    return this.globalService.isLoggedIn();
  }


  isAdmin () : boolean {    
    // console.log("admin right : "+this.tokenStorageService.getUser())
    return this.tokenStorageService.getUser().adminRight;
  }

  ngOnInit(): void {
  }

  logOut():void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

