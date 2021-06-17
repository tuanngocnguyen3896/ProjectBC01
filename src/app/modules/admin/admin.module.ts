import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  
]

@NgModule({
  declarations: [
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
  
  ]
})
export class AdminModule { }
