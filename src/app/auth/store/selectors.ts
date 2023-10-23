import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { AuthStateInterface } from '../types/authState.interface'

export const authFeatureSelector = (state: AppStateInterface) => state.auth

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (state: AuthStateInterface) => state.isSubmitting
)

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (state: AuthStateInterface) => state.validationErrors
)
