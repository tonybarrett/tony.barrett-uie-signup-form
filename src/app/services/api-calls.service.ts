import { Injectable } from '@angular/core';
import { SignupForm } from '../models/signup-form';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor() { }

  submitSignUp(formData: SignupForm): number {
    // Simulate an API call with a delay
    setTimeout(() => {
      console.log('API Call - Form Data Submitted:', formData);
    }, 1000); // Simulated delay of 1 second
    return 200;
  }
}
