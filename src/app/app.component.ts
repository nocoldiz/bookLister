import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
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
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  constructor(
    private breakpoints: BreakpointObserver
  ) { }
}