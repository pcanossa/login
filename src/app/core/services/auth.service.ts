import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login = {
    username: "",
    credential: "",

    makeLogin(username: string, credential: string):void {
      this.username = username;
      this.credential = credential;
    }
  };
  private url: string = 'http://localhost:3000/user'

  constructor(private httpClient: HttpClient, private router: Router) { }

  public sign(payload: {username: string, password: string}): Observable<any> {
    return this.httpClient.post(this.url+"/login", payload).pipe(
      map((response: any) => {
        this.login.makeLogin(response.username, response.credential);
        console.log(this.login);
        }),
      catchError((e) => {
        if (e.error.error) {
          return throwError(() => e.error.error)};

        return throwError (() => "Não foi possível concluir a ação, tente mais tarde")
      })
    )
  }

  public register(payload: {username: string, password: string, credential: string}): Observable<any> {
    return this.httpClient.post(this.url, payload).pipe(
      map((response: any) =>
      {
        console.log(response)
        return response
      }
      ),
      catchError((e) => {
        if (e.error.error) {
          return throwError(() => e.error.error)};

        return throwError (() => "Não foi possível concluir a ação, tente mais tarde")
      })

    )
  }

}
