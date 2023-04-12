import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;
  error: string = 'null';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode) {

    } else {
      this.authService.signup(email,password).subscribe(
        resData => {
          console.log(resData);
        }, errorRes => {
          console.log(errorRes);
          this.error = 'An error occured!'
        }
      )

    }
  }
}
