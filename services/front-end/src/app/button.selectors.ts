import { createSelector } from '@ngrx/store';
import { ButtonState } from './button.state';

export const selectButtonState = (state: any) => state.button;

export const selectIsButtonAddEnabled = createSelector(
  selectButtonState,
  (state: ButtonState) => state.isEnabledAdd
);

export const selectIsButtonInfoEnabled = createSelector(
    selectButtonState,
    (state: ButtonState) => state.isEnabledInfo
  );