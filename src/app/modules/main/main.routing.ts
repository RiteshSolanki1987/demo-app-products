import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)
            },
            {
                path: 'trash',
                loadChildren: () => import('../trash/trash.module').then(mod => mod.TrashModule)
            },
        ],
        canActivate: []
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }