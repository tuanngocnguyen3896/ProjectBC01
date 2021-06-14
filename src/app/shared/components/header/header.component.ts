import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User , UserReponseData } from 'src/app/core/Models/User.model';
import { LoadUser, Login, Logout } from 'src/app/modules/auth/_actions/auth.actions';
import { isLoggedIn, userLogin} from 'src/app/modules/auth/_selectors/auth.selectors';
import { AppState } from '../../reducers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  userData: User | UserReponseData;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.store.select(isLoggedIn);
    this.store.select(userLogin).subscribe((state) => {
      this.userData = state;
    });
    
  }
  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(new Logout())
  }
}
