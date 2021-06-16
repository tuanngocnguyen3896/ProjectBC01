import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData, CoursesUpdate } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadCourses } from '../../../home/_actions/courses.actions';
import { getCoursesList } from '../../../home/_selectors/courses.selectors';
import { deleteCourses } from '../../_action/admin.action';

@Component({
  selector: 'app-admin-load-courses',
  templateUrl: './admin-load-courses.component.html',
  styleUrls: ['./admin-load-courses.component.scss']
})
export class AdminLoadCoursesComponent implements OnInit {
coursesUpdate:Observable<CoursesUpdate>
maKhoaHoc: Params;
courses: Observable<CoursesData>
  constructor(private route : ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,) { }

  ngOnInit(): void {
    this.route.params.pipe().subscribe(value => {
      console.log(value);
      
      return this.maKhoaHoc =value});
    
    this.store.dispatch(new LoadCourses());
    this.courses = this.store.select(getCoursesList)
  }
  onDeleteCourses(maKhoaHoc:string){
    if(confirm("Are you sure to delete this course?")){
      console.log('delete course');
      this.store.dispatch(deleteCourses({maKhoaHoc}))
      console.log(maKhoaHoc);
      
    }
    

}
}
