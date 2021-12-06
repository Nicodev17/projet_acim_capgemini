import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss']
})

export class ListCollaboratorComponent implements OnInit {

  arrayCollab: User[] = [];

  constructor(private router: Router, private service : GlobalService) { }

  addBtnOnClick(){
    this.router.navigateByUrl('/form-add-user');
  }

  ngOnInit(): void {
    this.service.getProfils().subscribe(resultFromAPI => {
      this.arrayCollab = resultFromAPI;
    });
  }

}