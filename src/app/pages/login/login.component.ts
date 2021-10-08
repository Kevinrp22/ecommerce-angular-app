import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(public userService: UsersService, public router:Router) {}

  ngOnInit() {}

  login() {
    const user = { email: this.email.value, password: this.password.value };
    this.userService.login(user).subscribe((data) => {
      console.log(data);
      
      this.userService.setToken(data.token);
      this.router.navigateByUrl("/")
    });
  }
}
