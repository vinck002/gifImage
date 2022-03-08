import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    GifsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
