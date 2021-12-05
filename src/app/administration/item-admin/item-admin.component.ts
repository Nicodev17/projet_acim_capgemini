import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.scss']
})
export class ItemAdminComponent implements OnInit {

  @Input() admin : any;

  constructor() { }

  ngOnInit(): void {
  }

}
