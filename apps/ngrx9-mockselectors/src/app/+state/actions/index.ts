import { createAction, props } from '@ngrx/store';

export const updateFoo = createAction(
  '[App] Update foo',
  props<{
    foo: string;
  }>()
);
