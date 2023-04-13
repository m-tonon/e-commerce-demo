import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;
  error: string = 'null';

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    console.log(this.isLoginMode);
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
    } else {
      this.authService.signup(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
        },
        error: (errorRes) => {
          console.log(errorRes);
          ('An error occured!');
        },
      });
    }

    form.reset();
  }
}
