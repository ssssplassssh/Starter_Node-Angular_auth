import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]), 
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
