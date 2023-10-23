import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducer } from './store/reducers'
import { featureNames } from './store/featureNames'
import { AuthService } from './services/auth.service'
import { RegisterEffects } from './store/effects/register.effects'
import { RegisterComponent } from './components/register/register.component'
import { ValidationErrorMessagesModule } from '../shared/modules/validationErrorMessages/validationErrorMessages.module'

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
]

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(featureNames.AUTH, reducer),
        EffectsModule.forFeature([RegisterEffects]),
        ValidationErrorMessagesModule,
    ],
    providers: [AuthService],
})
export class AuthModule {}
