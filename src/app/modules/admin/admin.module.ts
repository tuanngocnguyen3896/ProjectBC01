import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AdminUserEffects } from './_effects/user-admin.effects';
import { CourseAdminEffects } from './_effects/course-admin.effects';
import { StoreModule } from '@ngrx/store';
import { ADMIN_USER_NAME } from './_selectors/user.selector';
import { adminUserReducer } from './_reducer/user-admin.reducer';
import { AdminGuard } from './_guard/admin.guard';


const adminRoutes: Routes = [
  {
    path: '', component: AdminTemplateComponent, children: [
      { path: 'admin-courses', component: AdminCoursesComponent, 
      
    },
      { path: 'edit-courses/:maKhoaHoc', component: EditCoursesComponent },
      { path: 'admin-user', component: UserComponent }
    ],
  
    canActivate: [AdminGuard],

  }


]

@NgModule({
  declarations: [
    AdminCoursesComponent,
    EditCoursesComponent,
    AdminTemplateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AdminUserEffects, CourseAdminEffects]),
    StoreModule.forFeature(ADMIN_USER_NAME, adminUserReducer),
  ]
})
export class AdminModule { }