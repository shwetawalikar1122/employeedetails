import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  visibleSidebar1;

@Output() sidebar=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  OnClick()  {
    this.sidebar.emit();
  }

}
