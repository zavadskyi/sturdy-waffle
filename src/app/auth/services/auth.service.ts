import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { environment } from 'src/environments/environments'
import { AuthResponseInterface } from '../types/authResponse.interface'

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        return this.http
            .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
            .pipe(map((res: AuthResponseInterface) => res.user))
    }
}
