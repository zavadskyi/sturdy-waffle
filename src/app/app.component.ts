import { Component, ViewChild } from '@angular/core'
import {
    BehaviorSubject,
    Observable,
    catchError,
    combineAll,
    combineLatest,
    combineLatestAll,
    filter,
    interval,
    map,
    of,
} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
