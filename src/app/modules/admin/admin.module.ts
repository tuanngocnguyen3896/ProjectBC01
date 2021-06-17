import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminLoadCoursesComponent } from './Courses/admin-load-courses/admin-load-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AddCoursesComponent } from './Courses/add-courses/add-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEffects } from './_effects/admin.effects';
import { HttpClientModule } from '@angular/common/http';
import { EditCoursesComponent } from './Courses/edit-courses/edit-courses.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCoursesComponent } from './Courses/admin-courses/admin-courses.component';

const adminRoutes : Routes=[
 {path: '', component:AdminComponent},
 {path:'admin', component:AdminComponent},

 {path:'admin-courses', component:AdminCoursesComponent,children:[
   {path:'load-courses', component:AdminLoadCoursesComponent},
   {path:'add-courses', component:AddCoursesComponent},
   {path:'edit-courses', component:EditCoursesComponent}
 ]}
=======
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
    {path:'admin-user', component:UserComponent}
  ]}
  
>>>>>>> Stashed changes
]

@NgModule({
  declarations: [
<<<<<<< Updated upstream
    AdminTemplateComponent,
    AdminLoadCoursesComponent,
    AddCoursesComponent,
    EditCoursesComponent,
    AdminComponent,
    AdminCoursesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    EffectsModule.forFeature([AdminEffects]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
=======
    UserComponent,
    CoursesComponent,
    AdminTemplateComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AdminUserEffects, CoursesEffects]),
    StoreModule.forFeature(ADMIN_USER_NAME, adminUserReducer),
  
>>>>>>> Stashed changes
  ]
})
export class AdminModule { }
