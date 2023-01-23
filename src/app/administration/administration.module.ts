import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
