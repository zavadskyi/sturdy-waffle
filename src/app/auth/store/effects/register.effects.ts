import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from '../actions/register.action'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class RegisterEffects {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: CurrentUserInterface) =>
                        registerSuccessAction({ currentUser })
                    ),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            registerFailureAction({
                                errors: errorResponse.error.errors,
                            })
                        )
                    )
                )
            })
        )
    )
    constructor(private actions$: Actions, private authService: AuthService) {}
}
