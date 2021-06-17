import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserReponseData } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
import { loadUser } from '../_action/user-admin.action';
import { getUserList } from '../_selectors/user-admin.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user: Observable<UserReponseData[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.user = this.store.select(getUserList),
    this.store.dispatch(loadUser())
  }

}
