import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { User } from 'src/app/core/Models/User.model';
import { userLogin } from 'src/app/modules/auth/_selectors/auth.selectors';
import { AppState } from 'src/app/shared/reducers';
import { LoadCoursesDetail } from '../../_actions/categories.actions';
import {  RegisterCourses } from '../../_actions/courses.actions';
import { RequestForm } from '../../_models/courses.models';
import { getCoursesDetail } from '../../_selectors/categories.selectors';
import {getCoursesError} from '../../_selectors/categories.selectors';
@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  maKhoaHoc:  Params;
  course: CoursesData;
  formRegister: RequestForm;
  errorMessage: Observable<string>;
  constructor(
    private route : ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) { }

   ngOnInit(): void {
    this.route.params.pipe().subscribe(value => this.maKhoaHoc = value);
    this.store.dispatch(new LoadCoursesDetail(this.maKhoaHoc.id));
    this.store.select(getCoursesDetail).subscribe(value => {
      // console.log('data trong subscribe: ',value);
      return this.course =value;
    });
    // console.log('Data ngoài:  ',this.course); // => null chỗ này
    this.errorMessage = this.store.select(getCoursesError);
  }
  onRegisterCourses(){
    let user: User;
    this.store.select(userLogin).subscribe(value => user = value)
    if(user === null){
      alert('Please login to continue')
      this.router.navigate(['auth/login']);
    }
    const payload = {
      maKhoaHoc: this.maKhoaHoc.id,
      taiKhoan: user.taiKhoan
    };
    this.store.dispatch(new RegisterCourses(payload));
  }

}
