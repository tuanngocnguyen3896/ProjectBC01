import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/reducers';
import { SetLoadingSpinner } from 'src/app/shared/_actions/shared.action';
import { LoadUser, Login, SetErrorMessage } from '../../_actions/auth.actions';
import { errorMessage } from '../../_selectors/auth.selectors';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router
  ) {}
  errorMessage: Observable<string>;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      taiKhoan: new FormControl('aaa1', [Validators.required]),
      matKhau: new FormControl('aaa1', [Validators.required]),
    });
    this.store.dispatch(new SetErrorMessage(null));
    this.errorMessage = this.store.select(errorMessage);
    const userLogin = this.authService.getUserFromLocalStorage();
    if (userLogin) {
      this.router.navigate(['/home']);
    }
  }
  onLoginSubmit() {
    const payload = {
      taiKhoan: this.loginForm.value.taiKhoan,
      matKhau: this.loginForm.value.matKhau,
    };
    this.store.dispatch(new SetLoadingSpinner(true));
    this.store.dispatch(new Login(payload));
  }
}
