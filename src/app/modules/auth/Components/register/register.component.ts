import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/reducers';
import { Register, SetErrorMessage } from '../../_actions/auth.actions';
import { errorMessage } from '../../_selectors/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage: Observable<string>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.handleSignUpForm();
    this.store.dispatch(new SetErrorMessage(null));
    this.errorMessage = this.store.select(errorMessage);
  }
  handleSignUpForm(){
    this.signUpForm = new FormGroup({
      taiKhoan: new FormControl('aaa1',[
        Validators.required
      ]),
      matKhau: new FormControl('aaa1',[
        Validators.required
      ]),
      hoTen: new FormControl('aaaa',[
        Validators.required
      ]),
      soDT: new FormControl('aaaa',[
        Validators.required
      ]),
      maNhom: new FormControl('aaaa',[
        Validators.required
      ]),
      email: new FormControl('aaa@test.com',[
        Validators.required
      ]),
    });
  }
  onSignUpSubmit(){
    if(!this.signUpForm.valid){
      return;
    }
    const payload = {
      taiKhoan : this.signUpForm.value.taiKhoan,
      matKhau : this.signUpForm.value.matKhau,
      hoTen : this.signUpForm.value.hoTen,
      soDT: this.signUpForm.value.soDT,
      email : this.signUpForm.value.email,
      maNhom : this.signUpForm.value.maNhom
    }
    
    this.store.dispatch(new Register(payload));
    return;
  }
}
