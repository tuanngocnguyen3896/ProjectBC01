import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { loadCourses } from '../../_actions/courses.actions';
import { getCoursesList } from '../../_selectors/courses.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Observable<CoursesData[]>;

  constructor(    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.courses = this.store.select(getCoursesList)
    this.store.dispatch(loadCourses());
    console.log(this.courses)
  }

}
