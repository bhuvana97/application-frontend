import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!:string;

  constructor() { }

  onSubmit() {
    if (this.isValid()) {
      // Form is valid, perform submission logic here
      console.log('Form submitted:', {  email: this.email, password:this.password });
      window.location.reload();
    }
  }

  isValid(): boolean {
    return  !!this.email && !!this.password;
  }
  
}
