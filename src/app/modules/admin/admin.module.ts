import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminLoadCoursesComponent } from './admin-load-courses/admin-load-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { CoursesCategoriesComponent } from '../home/Components/courses-categories/courses-categories.component';

const adminRoutes : Routes=[
  {path:'', component:AdminLoadCoursesComponent, children:[
    {path:'', component:AdminLoadCoursesComponent}
  ]}
]

@NgModule({
  declarations: [
    AdminTemplateComponent,
    AdminLoadCoursesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    EffectsModule.forFeature([])
  ]
})
export class AdminModule { }
