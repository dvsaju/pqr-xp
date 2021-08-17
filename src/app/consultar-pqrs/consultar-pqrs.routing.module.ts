import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPqrsComponent } from './login-pqrs/login-pqrs.component';
import { ConsultarPqrsComponent } from "./consultar-pqrs.component";
import { DetallePqrsComponent } from './detalle-pqrs/detalle-pqrs.component';

const routes: Routes = [
    {
        path: 'pqrs', component: ConsultarPqrsComponent, children: [
            { path: ':id', component: DetallePqrsComponent }
        ]
    },
    { path: 'login', component: LoginPqrsComponent },
    { path: '', redirectTo: 'login' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultarPqrsRoutingModule { }
