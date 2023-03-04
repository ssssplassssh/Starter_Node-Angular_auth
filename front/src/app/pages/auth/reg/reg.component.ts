import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
