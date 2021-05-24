import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/Models/User.model';
import { logoutAction } from 'src/app/modules/auth/_actions/auth.actions';
import { isAuthenticated} from 'src/app/modules/auth/_selectors/auth.selectors';
import { AppState } from '../../reducers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }
  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(logoutAction())
  }
}
