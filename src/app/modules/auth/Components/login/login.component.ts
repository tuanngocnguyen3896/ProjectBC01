import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/reducers';
import {Login, SetErrorMessage} from '../../_actions/auth.actions';
import { errorMessage } from '../../_selectors/auth.selectors';
// import { loginAction } from '../../_actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private store: Store<AppState>) { }
  errorMessage: Observable<string>
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      taiKhoan: new FormControl('123',[
        Validators.required
      ]),
      matKhau: new FormControl('123',[
        Validators.required
      ])
    })
    this.store.dispatch(new SetErrorMessage(null));
    this.errorMessage = this.store.select(errorMessage);
  }
  onLoginSubmit(){
    const payload = {
      taiKhoan : this.loginForm.value.taiKhoan,
      matKhau : this.loginForm.value.matKhau,
    }
    // this.store.dispatch(loginAction(payload));    
    this.store.dispatch(new Login(payload));
  }
  
}
