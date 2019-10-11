import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
visibleSidebar1;

  constructor() { }

  ngOnInit() {
    // this.visibleSidebar1=true;
  }
  side(){
    this.visibleSidebar1=true;
  }

}
