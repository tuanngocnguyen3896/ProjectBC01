import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { RequestForm } from 'src/app/modules/home/_models/courses.models';
import { AppState } from 'src/app/shared/reducers';
import { SetLoadingSpinner } from 'src/app/shared/_actions/shared.action';
import { CancelCourses, EditUser, LoadUser, Logout } from '../../_actions/auth.actions';
import {
  errorMessage,
  getUserProfile,
  userLogin,
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
  editForm: FormGroup;
  errorMessage: Observable<string>;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.store.select(userLogin).subscribe((state) => {
      this.isUserLogin = state;
    });
    this.getProfile();
    this.handleEditForm();
    this.errorMessage = this.store.select(errorMessage); 
  }
  
  getProfile() {
    this.store.dispatch(new LoadUser(this.isUserLogin));
    this.store.select(getUserProfile).subscribe((state) => {
      this.userProfile = state;
    });
  }
  handleEditForm() {
    const data = this.authService.getUserFromLocalStorage();    
    this.editForm = new FormGroup({
      taiKhoan: new FormControl(`${data.taiKhoan}`, [Validators.required]),
      matKhau: new FormControl('', [Validators.required]),
      hoTen: new FormControl('', [Validators.required]),
      soDT: new FormControl('', [Validators.required]),
      maNhom: new FormControl('gp03', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      maLoaiNguoiDung: new FormControl((`${data.maLoaiNguoiDung}`).toLowerCase(), [Validators.required]),
    });    
  }
  onEditSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    const payload = {
      taiKhoan: this.editForm.value.taiKhoan,
      matKhau: this.editForm.value.matKhau,
      hoTen: this.editForm.value.hoTen,
      soDT: this.editForm.value.soDT,
      email: this.editForm.value.email,
      maNhom: this.editForm.value.maNhom,
      maLoaiNguoiDung: this.editForm.value.maLoaiNguoiDung,
    };

    this.store.dispatch(new EditUser(payload));
    return;
  }
  onCancelCourses(item: RequestForm){
    const payload: RequestForm ={
      maKhoaHoc : item.maKhoaHoc,
      taiKhoan: this.isUserLogin.taiKhoan
    }
    this.store.dispatch(new CancelCourses(payload))
  }
  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(new Logout())
  }
  
}
