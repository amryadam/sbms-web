import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AuthorizedComponent } from './authorized/authorized.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { SharedModule } from '../shared-module.module';

@NgModule({
  declarations: [LoginComponent, AuthorizedComponent],
  imports: [CommonModule, AdministrationRoutingModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AdministrationModule {}
