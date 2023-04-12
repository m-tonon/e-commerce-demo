import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;

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

  onSubmit(): void {
    if (!this.authForm.valid) {
      return
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

  }
}
