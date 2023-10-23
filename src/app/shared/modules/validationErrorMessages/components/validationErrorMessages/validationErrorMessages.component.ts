import { Component, Input, OnInit } from '@angular/core'
import { BackendErrorsInterface } from '../../../../types/backendErrors.interface'

@Component({
    selector: 'mc-validation-error-messages',
    templateUrl: './validationErrorMessages.component.html',
    styleUrls: ['./validationErrorMessages.component.scss'],
})
export default class ValidationErrorMessagesComponent implements OnInit {
    @Input() backendErrors: BackendErrorsInterface
    errorMessages: string[]

    ngOnInit(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((key) =>
            this.backendErrors[key].join(', ')
        )
    }
}
