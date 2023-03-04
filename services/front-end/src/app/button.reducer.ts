import { createReducer, on } from '@ngrx/store';
import { enableButtonAdd, disableButtonAdd, enableButtonInfo, disableButtonInfo } from './button.actions';

export interface ButtonState {
  isEnabledAdd: boolean;
  isEnabledInfo:boolean
}

export const initialState: ButtonState = {
    isEnabledAdd: false,
    isEnabledInfo:false
  };
  
  export const buttonReducer = createReducer(
    initialState,
    on(enableButtonAdd, (state) => ({ ...state, isEnabledAdd: true })),
    on(disableButtonAdd, (state) => ({ ...state, isEnabledAdd: false })),
    on(enableButtonInfo, (state) => ({ ...state, isEnabledInfo: true })),
    on(disableButtonInfo, (state) => ({ ...state, isEnabledInfo: false }))
  );