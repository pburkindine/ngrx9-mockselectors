import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getFoo } from './+state/selectors';
import { State } from './+state/reducers';

@Component({
  selector: 'ngrx9-mockselectors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private destroy$ = new Subject();

  readonly foo$ = this.store.pipe(
    select(getFoo),
    takeUntil(this.destroy$)
  );

  constructor(private store: Store<State>) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
