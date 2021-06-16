import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthTemplateComponent } from './Components/auth-template/auth-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './_reducers/auth.reducers';
import { AUTH_STATE_NAME } from './_selectors/auth.selectors';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './_effects/auth.effects';
import { AuthGuard } from './_guards/auth.guard';

const AuthRoute:Routes = [
  {path:'',component:AuthTemplateComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent,
        canActivate: [AuthGuard],
  },
  ]}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthTemplateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoute),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
  ]
})
export class AuthModule { }
