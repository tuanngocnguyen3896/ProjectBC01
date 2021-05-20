import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCategories } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { loadCategories } from '../../_actions/courses.actions';
import { getCategories } from '../../_selectors/courses.selectors';


@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent implements OnInit {
  categories: Observable<CourseCategories[]>;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.categories = this.store.select(getCategories);
    this.store.dispatch(loadCategories());
    console.log(this.categories);
  }

}
