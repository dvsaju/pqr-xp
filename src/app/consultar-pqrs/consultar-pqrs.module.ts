import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePqrsComponent } from './detalle-pqrs/detalle-pqrs.component';
import { ListadoPqrsComponent } from './listado-pqrs/listado-pqrs.component';
import { LoginPqrsComponent } from './login-pqrs/login-pqrs.component';
import { SharedModule } from "src/app/shared/shared.module";
import { ConsultarPqrsRoutingModule } from "./consultar-pqrs.routing.module";
import { ConsultarPqrsComponent } from "./consultar-pqrs.component";
import { RecuperarPinComponent } from "./recuperar-pin/recuperar-pin.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DetallePqrsComponent, ListadoPqrsComponent, LoginPqrsComponent, ConsultarPqrsComponent, RecuperarPinComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsultarPqrsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginPqrsComponent
  ]
})
export class ConsultarPqrsModule { }
