import { createSelector } from '@ngrx/store';

import { State } from '../reducers/index';

const getRootState = (state: State) => state;

export const getFoo = createSelector(
  getRootState,
  state => state.feature.foo
);
