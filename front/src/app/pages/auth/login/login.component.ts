import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]), 
  });
  Send_for_authorization() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
