import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/reducers';
import { signupAction } from '../../_actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      taiKhoan: new FormControl('',[
        Validators.required
      ]),
      matKhau: new FormControl('',[
        Validators.required
      ]),
      hoTen: new FormControl('',[
        Validators.required
      ]),
      maNhom: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required
      ]),
    })
  }
  onSignUpSubmit(){
    if(!this.signUpForm.valid){
      return;
    }
    const taiKhoan = this.signUpForm.value.taiKhoan;
    const matKhau = this.signUpForm.value.matKhau;
    const hoTen = this.signUpForm.value.hoTen;
    const email = this.signUpForm.value.email;
    const maNhom = this.signUpForm.value.maNhom;
    this.store.dispatch(signupAction({taiKhoan,matKhau,hoTen,maNhom,email}));
    return;
  }
}
