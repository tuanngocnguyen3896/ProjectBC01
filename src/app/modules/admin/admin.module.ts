import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AdminUserEffects } from './_effects/user-admin.effects';
import { StoreModule } from '@ngrx/store';
import { ADMIN_USER_NAME } from './_selectors/user-admin.selectors';
import { adminUserReducer } from './_reducer/user-admin.reducer';
import { CoursesData } from 'src/app/core/Models/Courses.model';
import { CoursesEffects } from '../home/_effects/courses.effects';

const adminRoutes: Routes = [
  {path:'', component:AdminTemplateComponent, children:[
    {path:'admin-courses', component:CoursesComponent},
=======
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ADMIN_USER_NAME } from './_selectors/user.selector';
import { adminUserReducer } from './_reducer/user-admin.reducer';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminUserEffects } from './_effects/user-admin.effects';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import {CourseAdminEffects} from './_effects/course-admin.effects'

const adminRoutes: Routes = [
  {path:'', component:AdminTemplateComponent, children:[
    {path:'admin-courses', component:AdminCoursesComponent},
    {path:'edit-courses/:maKhoaHoc', component:EditCoursesComponent},
    
>>>>>>> Stashed changes
    {path:'admin-user', component:UserComponent}
  ]}
  
]

@NgModule({
  declarations: [
<<<<<<< Updated upstream
    UserComponent,
    CoursesComponent,
    AdminTemplateComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
=======
    AdminTemplateComponent,
    UserComponent,
    AdminCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    CommonModule,
>>>>>>> Stashed changes
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< Updated upstream
    EffectsModule.forFeature([AdminUserEffects, CoursesEffects]),
    StoreModule.forFeature(ADMIN_USER_NAME, adminUserReducer),
  
=======
    EffectsModule.forFeature([AdminUserEffects, CourseAdminEffects]),
    StoreModule.forFeature(ADMIN_USER_NAME, adminUserReducer),
>>>>>>> Stashed changes
  ]
})
export class AdminModule { }
