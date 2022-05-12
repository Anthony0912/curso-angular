import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/page/basics/basics.component';
import { NumbersComponent } from './sales/page/numbers/numbers.component';
import { NotCommonsComponent } from './sales/page/not-commons/not-commons.component';
import { OrderComponent } from './sales/page/order/order.component';

const routes: Routes = [
  { path: '', component: BasicsComponent, pathMatch: 'full' },
  { path: 'numeros', component: NumbersComponent },
  { path: 'no-comunes', component: NotCommonsComponent },
  { path: 'ordenar', component: OrderComponent },
  { path: '**', component: BasicsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
