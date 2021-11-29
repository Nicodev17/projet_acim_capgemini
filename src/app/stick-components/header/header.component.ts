import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private globalService : GlobalService) { }

  isNotLogged() : boolean {
    return !this.globalService.isLoggedIn();
  }

  isAdmin () : boolean {
    return this.globalService.isAdmin();
  isLoggedIn() : boolean {
    return this.globalService.isLoggedIn();
  }

  ngOnInit(): void {

  }

}
