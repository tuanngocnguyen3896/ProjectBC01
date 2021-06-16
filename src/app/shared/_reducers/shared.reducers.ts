import {  SharedActions, SharedActionTypes } from "../_actions/shared.action";

export interface SharedState {
    showLoading: boolean;
    errorMessage: string;
  }
  
export const initialState: SharedState = {
    showLoading: false,
    errorMessage: '',
};
export function SharedReducer(state = initialState, action: SharedActions ) : SharedState {
    switch (action.type) {
        case SharedActionTypes.SET_LOADING_ACTION: {
            return {
                ...state,
                showLoading: action.status,
            }
        }
        default:
            return state;
    }
}
