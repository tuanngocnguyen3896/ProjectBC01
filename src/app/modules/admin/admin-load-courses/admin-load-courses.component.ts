import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadCourses } from '../../home/_actions/courses.actions';
import { getCoursesList } from '../../home/_selectors/courses.selectors';

@Component({
  selector: 'app-admin-load-courses',
  templateUrl: './admin-load-courses.component.html',
  styleUrls: ['./admin-load-courses.component.scss']
})
export class AdminLoadCoursesComponent implements OnInit {
courses:Observable <CoursesData>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadCourses());
    this.courses = this.store.select(getCoursesList)
  }

}
