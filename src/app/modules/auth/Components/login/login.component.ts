import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/reducers';
import { loginAction } from '../../_actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      taiKhoan: new FormControl('123',[
        Validators.required
      ]),
      matKhau: new FormControl('123',[
        Validators.required
      ])
    })
  }
  onLoginSubmit(){
    const taiKhoan = this.loginForm.value.taiKhoan;
    const matKhau = this.loginForm.value.matKhau;
    this.store.dispatch(loginAction({taiKhoan,matKhau}));    
  }
  
}
