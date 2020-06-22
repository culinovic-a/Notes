import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { routerAnimation } from './shared/animations/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation],
})
export class AppComponent implements OnInit {
  title = 'Notes';

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add('light-theme');
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
