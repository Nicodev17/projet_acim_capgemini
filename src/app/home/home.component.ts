import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globalService : GlobalService, private tokenStorageService : TokenStorageService) { }

  isNotLogged() : boolean {
    return !this.globalService.isLoggedIn();
  }

  isAdmin () : boolean {
    return this.tokenStorageService.getUser().adminRight;
  }

  ngOnInit(): void {
  }

}
