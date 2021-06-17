import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appReducer } from './shared/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './modules/auth/_services/auth.service';
import { TokenInterceptor } from './modules/auth/_interceptors/auth.interceptor';
import { AuthEffects } from './modules/auth/_effects/auth.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NgbModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
