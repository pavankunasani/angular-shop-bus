import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{ path: 'customers', component: CustomerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
