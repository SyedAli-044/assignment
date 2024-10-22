import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = ''; // To store the error message

  // Hardcoded credentials
  hardcodedEmail!:string;
  hardcodedPassword !:string;

  constructor(private formBuilder: FormBuilder, private router:Router, private api:ApiService) {
    this.hardcodedEmail = this.api.hardcodedEmail;
    this.hardcodedPassword = this.api.hardcodedPassword;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = ''; // Reset error message

    // Check if the form is valid
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // Check if the email and password match the hardcoded credentials
      if (email === this.hardcodedEmail && password === this.hardcodedPassword) {
        console.log('Form Submitted', this.loginForm.value);
        // alert('Login Successful!');
        this.router.navigate(['/dashboard'])
      } else {
        // If credentials don't match, show an error message
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    }
  }

}
