import { Component } from '@angular/core';
import { SignupPageComponent } from './components/smart/signup-page/signup-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sign Up Page using a Reactive form (v17)';
}
