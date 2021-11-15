import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { setDrawer } from './store/actions/app-utils.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  getAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  ngAfterViewInit() {
    this.breakpoints
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.store.dispatch(setDrawer({ open: false }));

        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.store.dispatch(setDrawer({ open: true }));

        }
      });
  }
  constructor(
    private breakpoints: BreakpointObserver,
    private store: Store
  ) { }
}