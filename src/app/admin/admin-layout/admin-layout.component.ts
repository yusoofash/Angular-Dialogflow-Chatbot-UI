import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private sidebarService: NbSidebarService,
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

}
