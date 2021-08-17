import { Component, OnInit, Input } from '@angular/core';
import { MensajePQR } from 'src/app/core/model/pqr';

@Component({
  selector: 'app-pqr-card',
  templateUrl: './pqr-card.component.html',
  styleUrls: ['./pqr-card.component.scss']
})
export class PqrCardComponent implements OnInit {

  @Input() mensaje: MensajePQR = null;

  constructor() { }

  ngOnInit(): void {
  }

}
