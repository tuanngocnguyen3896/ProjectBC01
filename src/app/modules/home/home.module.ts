import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './Components/home-template/home-template.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CoursesDetailComponent } from './Components/courses-detail/courses-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { COURSES_STATE_NAME } from './_selectors/courses.selectors';
import { CoursesEffects } from './_effects/courses.effects';
import { EffectsModule } from '@ngrx/effects';
import { CoursesCategoriesComponent } from './Components/courses-categories/courses-categories.component';
import { CoursesReducer } from './_reducers/courses.reducers';

const HomeRoute:Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'courses',component:CoursesComponent,
  children: [
    {path:'detail/:id',component:CoursesDetailComponent},
  ]
  },

  
]

@NgModule({
  declarations: [
    HomeTemplateComponent,
    CoursesComponent,
    CoursesDetailComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CoursesCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoute),
    StoreModule.forFeature(COURSES_STATE_NAME, CoursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
  ]
})
export class HomeModule { }
