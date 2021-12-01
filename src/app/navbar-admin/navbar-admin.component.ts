import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  isHover: boolean = false;

  constructor(private globalService : GlobalService) {  }

  isLoggedIn() : boolean {
    return this.globalService.isLoggedIn();
  }

  isAdmin () : boolean {
    return this.globalService.isAdmin();
  }

  ngOnInit(): void {
  }

}
