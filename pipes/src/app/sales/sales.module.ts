import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './page/numbers/numbers.component';
import { NotCommonsComponent } from './page/not-commons/not-commons.component';
import { BasicsComponent } from './page/basics/basics.component';
import { OrderComponent } from './page/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
