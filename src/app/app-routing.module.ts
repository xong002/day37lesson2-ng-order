import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

const routes: Routes = [
  { path: '', component: ListOrderComponent },
  { path: 'add', component: AddOrderComponent },
  //{ path: '**', redirectTo: '/', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
