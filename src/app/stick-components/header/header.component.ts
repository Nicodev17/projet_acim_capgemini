import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService , private globalService : GlobalService) { }

  isNotLogged() : boolean {
    return !this.globalService.isLoggedIn();
  }

  ngOnInit(): void {

  }

}
