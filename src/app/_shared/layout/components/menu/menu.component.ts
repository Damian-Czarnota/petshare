import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeStepIndex: number;

  steps = [
    { className: 'cart', pathRegexp: new RegExp('^/$')},
    { className: 'home', pathRegexp: new RegExp('^/support$')},
    { className: 'add', pathRegexp: null},
    { className: 'magnifier', pathRegexp: null},
    { className: 'user', pathRegexp: null}];

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events
        .pipe(
            takeUntil(this.destroyed$),
            filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.activeStepIndex = this.steps.findIndex(step =>
              event.urlAfterRedirects.match(step.pathRegexp));
        });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
