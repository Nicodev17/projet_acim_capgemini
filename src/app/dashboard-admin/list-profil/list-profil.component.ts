import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/shared/interfaces/user';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {

  arrayProfils: User[] = [];

  constructor(private service : GlobalService) {}

  ngOnInit(): void {
    this.service.getProfils().subscribe(resultFromAPI => {
      this.arrayProfils = resultFromAPI;

      console.log(this.arrayProfils);
    });
  }

}
