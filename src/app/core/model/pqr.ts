import { Usuario } from "./usuario";
export interface PQR {
    id: number;
    fechaRadicado: string;
    numeroRadicado: string;
    descripcion: string;
}

export interface PinResponse {
    pin: number;
    correo?: string;
    celular?: string;
}

export interface DetallePQR extends PQR {
    mensajes: MensajePQR[];
}

export interface MensajePQR {
    id: number;
    mensaje: string;
    fecha: string;
    usuario: Usuario;
    adjunto?: string;
}