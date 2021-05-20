import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../_reducers/auth.reducers";

export const AUTH_STATE_NAME = 'auth';
const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

// Check If User login
export const isAuthenticated = createSelector(getAuthState,(state) => {
    return state.user ? true : false;
})