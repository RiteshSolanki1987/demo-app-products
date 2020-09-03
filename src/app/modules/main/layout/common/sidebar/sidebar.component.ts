import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuitems = [];
  public config = {
    paddingAtStart: true,
    listBackgroundColor: 'transparent',
    fontColor: 'rgb(255, 255, 255)',
    backgroundColor: 'transparent',
    selectedListFontColor: 'rgb(255, 255, 255)',
  };

  private items = [
    {
      label: 'Home',
      icon: 'home',
      routerLink: 'home',
    },
    {
      label: 'Trash',
      icon: 'restore_from_trash',
      routerLink: 'trash',
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items.map(o => {
      const data = {
        label: o.label,
        icon: o.icon,
        routerLink: o.routerLink
      }
      this.menuitems.push(data);
    });
  }

  selectedItem = (data: any) => {
    if (data.routerLink) {
      this.router.navigate([data.routerLink])
    } else {
      return false;
    }
  }

}
