import { skip } from 'rxjs/operators';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { initialState } from './+state/reducers';
import { AppComponent } from './app.component';
import { getFoo } from './+state/selectors';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let storeMock: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState: { ...initialState } })]
    }).compileComponents();
  }));

  beforeEach(() => {
    // tslint:disable-next-line:no-any
    storeMock = TestBed.inject(Store) as any;
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('foo$', () => {
    it('should listen for changes to foo$', () => {
      const expected = 'bar';
      app.foo$.pipe(skip(1)).subscribe(val => {
        expect(val).toBe(expected);
      });

      const s = storeMock.overrideSelector(getFoo, expected);
      // s.setResult(expected);
      storeMock.refreshState();

      expect.assertions(1);
    });

    it('should stop listening for changes to the activeLinkType$ on destroy', () => {
      const expected = 'bam';
      app.foo$.pipe(skip(1)).subscribe(val => {
        expect(val).toBe(expected);
      });

      const s = storeMock.overrideSelector(getFoo, expected);
      // s.setResult(expected);
      storeMock.refreshState();

      app.ngOnDestroy();

      s.setResult('baz');
      storeMock.refreshState();

      expect.assertions(1);
    });
  });
});
