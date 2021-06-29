import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserReponseData } from 'src/app/core/Models/User.model';
import { AppState } from 'src/app/shared/reducers';
import { deleteUser,loadUser } from '../_action/user-admin.action';
import { getUserList } from '../_selectors/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: Observable<UserReponseData[]>;
  isActive: boolean= true;
  userGroup: string;
  getAll: string;
  constructor(private store:Store<AppState>,private route: ActivatedRoute,
    private modalService: NgbModal,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        console.log(params);
    })
    
    this.onChangeGroup(this.userGroup)
    this.user = this.store.select(getUserList);
    // this.store.dispatch(loadUser())
  }

  onDelete(taiKhoan:string){
    this.store.dispatch(deleteUser({taiKhoan}))
  }
  onChangeGroup(value){
    this.userGroup = value;
    if(this.userGroup === undefined){
      this.userGroup = 'GP01'
    }
    this.store.dispatch(loadUser({maNhom:value}))
  }
  onGetAllUsers(value){
    this.getAll= value;
    
    this.getAll=this.userGroup;
   this.store.dispatch(loadUser({maNhom:value}))
  }
  
}
