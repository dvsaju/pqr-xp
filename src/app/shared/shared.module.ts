import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PqrCardComponent } from './pqr-card/pqr-card.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ModalComponent, PqrCardComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PqrCardComponent,
    CardComponent,
    ModalComponent
  ]
})
export class SharedModule { }
