import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { credentials } from '../../assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public authenticate(username: string, password: string): boolean {
    if (credentials.username === username && credentials.password === password) {
      return true;
    } else {
      return false;
    }
  }
}
