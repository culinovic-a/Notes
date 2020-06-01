import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  isLightTheme = false;

  ngOnInit() {}

  changeTheme() {
    // if (this.isLightTheme) {
    //   this.isLightTheme = false;
    // } else {
    //   this.isLightTheme = true;
    // }
    this.isLightTheme = !this.isLightTheme;
  }
}
