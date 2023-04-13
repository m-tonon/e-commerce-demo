import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email,password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.pipe(
      tap(resData => {
        console.log(resData);
        if (this.isLoginMode) {
          this._snackBar.open('You have logged in successfully!','Ok', {duration: 5000});
          this.router.navigate(['/shop']);
        } else {
          this._snackBar.open('Your account was created','Ok', {duration: 5000});
        }
      })
    ).subscribe({
      error: (errorMessage) => {
        console.log(errorMessage);
        this._snackBar.open(errorMessage,'Ok', {duration: 5000});
      }
    });

    form.reset();
  }
}
