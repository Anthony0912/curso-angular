import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './page/numbers/numbers.component';
import { NotCommonsComponent } from './page/not-commons/not-commons.component';
import { BasicsComponent } from './page/basics/basics.component';
import { OrderComponent } from './page/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    UppercasePipe,
    FlyPipe,
    SortPipe
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
