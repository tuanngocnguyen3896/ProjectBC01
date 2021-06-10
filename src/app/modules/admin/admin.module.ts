import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminLoadCoursesComponent } from './admin-load-courses/admin-load-courses.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AddCoursesComponent } from './admin-load-courses/add-courses/add-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminEffects } from './_effects/admin.effects';
import { HttpClientModule } from '@angular/common/http';

const adminRoutes : Routes=[
  {path:'', component:AdminLoadCoursesComponent, children:[
    {path:'', component:AdminLoadCoursesComponent},
  ]},
  {path:'add',component:AddCoursesComponent }
]

@NgModule({
  declarations: [
    AdminTemplateComponent,
    AdminLoadCoursesComponent,
    AddCoursesComponent,
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
