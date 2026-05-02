import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor() { }

  submitSignUp(formData: any): number {
    // Simulate an API call with a delay
    setTimeout(() => {
      console.log('API Call - Form Data Submitted:', formData);
      // Here you would typically make an HTTP request to your backend API
    }, 1000); // Simulated delay of 1 second
    return 200;
  }
}
