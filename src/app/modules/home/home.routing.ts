import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { ProductDetailsComponent } from '../home/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: ':id',
        component: ProductDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
