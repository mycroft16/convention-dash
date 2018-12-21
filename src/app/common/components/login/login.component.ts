import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AppStore } from '../../store/app.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private store: AppStore) { }

  loginForm = this.fb.group({
    fanxUsername: ['', [
      Validators.required,
      Validators.email
    ]],
    fanxPassword: ['', [
      Validators.required
    ]]
  });

  getAuth() {
    console.log('loginForm: ', this.loginForm);
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
