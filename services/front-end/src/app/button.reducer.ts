import { createReducer, on } from '@ngrx/store';
import { enableButtonAdd, disableButtonAdd, enableButtonInfo, disableButtonInfo } from './button.actions';
import { initialState } from './button.state';

export const buttonStateKey = 'button';
  
  export const buttonReducer = createReducer(
    initialState,
    on(enableButtonAdd, (state) => ({ ...state, isEnabledAdd: true })),
    on(disableButtonAdd, (state) => ({ ...state, isEnabledAdd: false })),
    on(enableButtonInfo, (state) => ({ ...state, isEnabledInfo: true })),
    on(disableButtonInfo, (state) => ({ ...state, isEnabledInfo: false }))
  );