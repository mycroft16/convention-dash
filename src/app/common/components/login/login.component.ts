import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AppStore } from '../../store/app.store';
import { Observable } from 'rxjs';
import { ICon } from '../../interfaces/cons.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  private cons: Observable<ICon[]> = null;

  constructor(private fb: FormBuilder, private router: Router, private store: AppStore) { }

  loginForm = this.fb.group({
    fanxUsername: ['acm1979@gmail.com', [
      Validators.required,
      Validators.email
    ]],
    fanxPassword: ['admina', [
      Validators.required
    ]]
  });

  getAuth() {
    console.log('loginForm: ', this.loginForm);
    this.store.dispatch(factory => factory.cons.getCons());
    this.dataLoaded();
  }

  dataLoaded() {
    this.cons = this.store.select(store => store.cons.list);
    this.cons.subscribe(data => {
      if (data !== null) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  ngOnInit() {
  }

}
