import { Component,OnInit, Input  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCategories } from 'src/app/core/Models/Courses.model';
import { AppState } from 'src/app/shared/reducers';
import { LoadCategories } from '../../_actions/categories.actions';
import { LoadCoursesByCategories } from '../../_actions/courses.actions';
import { getCategories } from '../../_selectors/categories.selectors';



@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent implements OnInit {
  categories: Observable<CourseCategories>;
  @Input() group:string;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadCategories());
    this.categories = this.store.select(getCategories);
  }
  onLoadCoursesByCategory(categories){
      this.store.dispatch(new LoadCoursesByCategories(categories,this.group))
  }
 
}
