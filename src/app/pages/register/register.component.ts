import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  confirmarPassword = new FormControl('', [Validators.required]);

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm = (): void => {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  };

  private passwordsMatch = (_form: FormGroup): boolean => {
    if (
      _form.controls['password'].touched &&
      _form.controls['confirmPassword'].touched
    ) {
      if (_form.value.password === _form.value.confirmPassword) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  };
  register() {
    console.log(this.email.value, this.password.value);
  }
}
