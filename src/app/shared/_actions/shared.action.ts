import { Action } from '@ngrx/store';

export enum SharedActionTypes {
  SET_LOADING_ACTION = '[shared] set loading spinner',
  SET_ERROR_MESSAGE = '[shared] set error message',
}

export class SetLoadingSpinner implements Action {
  readonly type = SharedActionTypes.SET_LOADING_ACTION;
  constructor(public status: boolean) {}
}
export class SetErrorMessage implements Action {
  readonly type = SharedActionTypes.SET_ERROR_MESSAGE;
  constructor(public message: string) {}
}
export type SharedActions = 
    | SetLoadingSpinner 
    | SetErrorMessage
