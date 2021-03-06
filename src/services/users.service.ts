import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(users: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', users);
  }

  register(users: any): Observable<any> {
    return this.http.post('https://reqres.in/api/register', users);
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }

  getToken(){
    return this.cookies.get("token")
  }

  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }

  getUserLogged(){
    const token = this.getToken();
  }
  
}
