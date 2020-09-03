import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar = (): void => {
    this.sidenav.toggle();
  }

  logOut = () => {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isBiggerScreen(): boolean {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

}
