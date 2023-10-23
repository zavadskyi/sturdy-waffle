import { NgModule } from '@angular/core'
import ValidationErrorMessagesComponent from './components/validationErrorMessages/validationErrorMessages.component'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [ValidationErrorMessagesComponent],
    imports: [CommonModule],
    exports: [ValidationErrorMessagesComponent],
})
export class ValidationErrorMessagesModule {}
