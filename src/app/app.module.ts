import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorImpl } from './core/interceptors/http.interceptor';
import { ContentModule } from './content/content.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    CoreModule,
    ContentModule,
    MaterialModule,
    SharedModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: true,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorImpl, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
