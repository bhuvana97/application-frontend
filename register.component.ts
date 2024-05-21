import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  email!: string;
  phone!: string;
  password!:string;

  constructor() { }

  onSubmit() {
    if (this.isValid()) {
      // Form is valid, perform submission logic here
      console.log('Form submitted:', { name: this.name, email: this.email, phone: this.phone,password:this.password });
    window.location.reload()
    }
  }

  isValid(): boolean {
    return !!this.name && !!this.email && !!this.phone && !!this.password;
  }
  
}
