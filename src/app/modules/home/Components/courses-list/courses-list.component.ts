import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadCourses} from '../../_actions/courses.actions';
import { getCoursesList } from '../../_selectors/courses.selectors';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<CoursesData>;
  coursesGroup:string;
  getAll:string;
  constructor(    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.onChangeGroup(this.coursesGroup);
    this.courses$ = this.store.select(getCoursesList);
  }
 
  onChangeGroup(value){
    this.coursesGroup = value;
    if(this.coursesGroup === undefined){
      this.coursesGroup = 'GP01';
    }     
    this.store.dispatch(new LoadCourses(this.coursesGroup));
  }
  onGetAllCourses(value){
    this.getAll = value;
    this.getAll = this.coursesGroup;
    this.store.dispatch(new LoadCourses(this.getAll));
  }
}