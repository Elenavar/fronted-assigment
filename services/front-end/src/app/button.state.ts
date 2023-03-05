export interface ButtonState {
    isEnabledAdd: boolean;
    isEnabledInfo:boolean
  }
  
  export const initialState: ButtonState = {
      isEnabledAdd: false,
      isEnabledInfo:false
    };