import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // Check if token exists in LocalStorage and validate its expiration
    const token = localStorage.getItem('token');
    if (token) {
      const expirationDate = this.getTokenExpirationDate(token);
      if (expirationDate && expirationDate > new Date()) {
        // Token is valid
        return true;
      }
    }
    // Token is not valid or does not exist
    return false;
  }

  getTokenExpirationDate(token: string): Date | null {
    const decodedToken = this.decodeToken(token);
    if (!decodedToken || !decodedToken.exp) {
      return null;
    }
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate;
  }

  decodeToken(token: string): any {
    // Implement the logic to decode the JWT token using a library or custom method
    // Return the decoded token object
  }
}
