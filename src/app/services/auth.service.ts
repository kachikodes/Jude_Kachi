import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public setUserCredential(credential:any) {
    let data:any = JSON.stringify(credential)
    localStorage.setItem("credentials", data)
  }

  public getUserCredentials() : string|null{
    return localStorage.getItem('credentials')
  }
}
