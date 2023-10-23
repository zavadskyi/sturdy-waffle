import { Action, createReducer, on } from '@ngrx/store'

import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from './actions/register.action'
import { AuthStateInterface } from '../types/authState.interface'

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
}
const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null,
        })
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
            isLoggedIn: true,
            validationErrors: null,
        })
    ),
    on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    )
)

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}
