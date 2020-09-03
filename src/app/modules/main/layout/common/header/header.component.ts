import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() exitFromApp: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }  

  toggleSidebar = () => {
    this.menuClicked.emit(true);
  }

  doLogOut = () => {
    this.exitFromApp.emit(true);
  }

}
