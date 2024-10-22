import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  hardcodedEmail = 'user@example.com';
  hardcodedPassword = 'password123';
  constructor() { }
}
