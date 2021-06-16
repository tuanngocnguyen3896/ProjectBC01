import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
]

@NgModule({
  declarations: [
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
  ]
})
export class AdminModule { }
