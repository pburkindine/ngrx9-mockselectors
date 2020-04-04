import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { updateFoo } from '../actions';

export interface State {
  feature: {
    foo: string;
  };
}

export const initialState: State = {
  feature: { foo: null }
};

export const reducers: ActionReducerMap<State> = {
  feature: createReducer(
    initialState.feature,
    on(updateFoo, (current, { foo }) => {
      return {
        ...current,
        foo
      };
    })
  )
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
