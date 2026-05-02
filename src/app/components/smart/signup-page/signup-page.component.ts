import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiCallsService } from '../../../services/api-calls.service';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiCallsService: ApiCallsService
  ) {
    // Define form fields with validation rules
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Submit handler
  onSubmit(): void {
    console.log('Form Data:', this.signUpForm.value); // Form values on submission
    const res = this.apiCallsService.submitSignUp(this.signUpForm.value);
    if (res === 200) {
      alert('Form submitted successfully!');
    }
  }

}
