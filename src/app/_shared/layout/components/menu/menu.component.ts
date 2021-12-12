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
    { className: 'cart', pathRegexps: [new RegExp('^/$'),
        new RegExp('^\/single\/.*$'), new RegExp('^\/checkout\/.*$')], url: '/'},
    { className: 'home', pathRegexps: [new RegExp('^/support$'), new RegExp('^\/support\/.*$')], url: '/support'},
    { className: 'add', pathRegexps: null},
    { className: 'magnifier', pathRegexps: null},
    { className: 'user', pathRegexps: null}];

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events
        .pipe(
            takeUntil(this.destroyed$),
            filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.activeStepIndex = this.steps.findIndex(step =>
              step.pathRegexps.some(regexp => event.urlAfterRedirects.match(regexp)));
        });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
