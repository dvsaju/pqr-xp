import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PinResponse } from '../model/pqr';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usuario: Usuario;

  constructor(private _router: Router) {
    this.usuario = null;
  }

  obtenerNuevoPin(): Observable<number> {
    let random = Math.floor(1000 + (Math.random() * 8999));
    localStorage.setItem('pqr_pin', random.toString());
    localStorage.setItem('pqr_pin_exp_time', (Date.now() + 600000).toString())
    return of(random)
  }

  login(loginObject: PinResponse): Observable<Usuario> {
    let pin = localStorage.getItem('pqr_pin');
    let expTime = parseInt(localStorage.getItem('pqr_pin_exp_time'));
    if (pin && expTime) {
      if (pin === loginObject.pin.toString() && Date.now() < expTime) {
        this.usuario = { id: 1, nombre: 'David', avatar: '', asesor: true }
        return of(this.usuario)
      } else {
        return of(null)
      }
    } else {
      return of(null)
    }

  }

  isLoggedIn() {
    let pin = localStorage.getItem('pqr_pin');
    let pinTime = localStorage.getItem('pqr_pin_time');
    let expTime = Date.now();
    if (this.usuario && pin && pinTime && Date.now() < expTime) {
      return of(true)
    } else {
      return of(false)
    }
  }

  logout(): void {
    this.usuario = null;
    this._router.navigate(['login'])
  }
}
