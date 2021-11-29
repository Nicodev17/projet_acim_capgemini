import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globalService : GlobalService) { }

  isNotLogged() : boolean {
    return !this.globalService.isLoggedIn();
  }

  isAdmin () : boolean {
    return this.globalService.isAdmin();
  }

  isUser() : boolean {
    return this.globalService.isAdmin()==false && this.globalService.isLoggedIn();
  }

  ngOnInit(): void {
  }

}
