import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../_reducers/auth.reducers";

export const AUTH_STATE_NAME = 'auth';
const selectAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

// Check If User login
export const isLoggedIn = createSelector(
    selectAuthState,(state) => {
    return state.loggedIn;
})
export const userLogin = createSelector(
    selectAuthState,(state) => {
    return state.user;
})

export const isLoggedOut = createSelector(
    selectAuthState,(state) => {
    return !state.loggedIn;
});
export const errorMessage = createSelector(
    selectAuthState,(state) => {
        return state.errorMessage
    }
)
export const isUserLogin = createSelector(selectAuthState,(state) => {
    return state.user ;
})
export const getUserProfile = createSelector(selectAuthState,(state) => {
    return state.profile ;
})