import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { RegisterForm } from 'src/app/modules/home/_models/courses.models';
import { AppState } from 'src/app/shared/reducers';
import { CancelCourses, EditUser, LoadUser } from '../../_actions/auth.actions';
import {
  errorMessage,
  getUserProfile,
  isUserLogin,
} from '../../_selectors/auth.selectors';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isUserLogin: User | UserReponseData;
  userProfile: UserReponseData;
  editUpForm: FormGroup;
  errorMessage: Observable<string>;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Check account
    this.store.select(isUserLogin).subscribe((state) => {
      this.isUserLogin = state;
    });
    this.store.dispatch(new LoadUser(this.isUserLogin));

    // Console chạy 2 lần
    // Lần 1 null
    // Lần 2 trả về data
    this.getProfile();
    this.handleEditForm();
    this.errorMessage = this.store.select(errorMessage);
  }
  getProfile() {
    this.store.select(getUserProfile).subscribe((state) => {
      this.userProfile = state;
    });
  }

  handleEditForm() {
    this.editUpForm = new FormGroup({
      taiKhoan: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [Validators.required]),
      hoTen: new FormControl('', [Validators.required]),
      soDT: new FormControl('', [Validators.required]),
      maNhom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      maLoaiNguoiDung: new FormControl('hv', [Validators.required]),
    });
  }
  onEditSubmit() {
    if (!this.editUpForm.valid) {
      return;
    }
    const payload = {
      taiKhoan: this.editUpForm.value.taiKhoan,
      matKhau: this.editUpForm.value.matKhau,
      hoTen: this.editUpForm.value.hoTen,
      soDT: this.editUpForm.value.soDT,
      email: this.editUpForm.value.email,
      maNhom: this.editUpForm.value.maNhom,
      maLoaiNguoiDung: this.editUpForm.value.maLoaiNguoiDung,
    };

    this.store.dispatch(new EditUser(payload));
    return;
  }
  onCancelCourses(item: RegisterForm){
    const payload: RegisterForm ={
      maKhoaHoc : item.maKhoaHoc,
      taiKhoan: this.isUserLogin.taiKhoan
    }
    this.store.dispatch(new CancelCourses(payload))
  }
}
