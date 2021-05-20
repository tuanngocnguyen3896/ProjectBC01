import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() { }

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
      email: new FormControl('',[
        Validators.required
      ]),
    })
  }
  onSignUpSubmit(){
    const taiKhoan = this.signUpForm.value.taiKhoan;
    // const matKhau = this.signUpForm.value.matKhau;
    // const hoTen = this.signUpForm.value.hoTen;
    // const email = this.signUpForm.value.email;
    console.log(taiKhoan);
  }
}
