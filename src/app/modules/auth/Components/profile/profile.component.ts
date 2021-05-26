import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadUser } from '../../_actions/auth.actions';
import { getUserProfile , isUserLogin } from '../../_selectors/auth.selectors';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isUserLogin: User | UserReponseData;
  userProfile:UserReponseData
  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Check account
    this.store.select(isUserLogin).subscribe((state) => {
      this.isUserLogin = state;
    })
    this.store.dispatch(new LoadUser(this.isUserLogin));
    
    // Console chạy 2 lần
    // Lần 1 null
    // Lần 2 trả về data
    this.getProfile();
  }

  getProfile(){
    this.store.select(getUserProfile).subscribe((state) => {
      this.userProfile = state;
      console.log(this.userProfile);
    })
  }
 

}
