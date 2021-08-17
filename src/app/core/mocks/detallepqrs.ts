import { DetallePQR } from "../model/pqr";
import { Usuario } from "../model/usuario";

const usuario1: Usuario = { id: 1, nombre: 'David', avatar: '/assets/user-1.jpg', asesor: true }
const usuario2: Usuario = { id: 2, nombre: 'Diana', avatar: '/assets/user-2.jpg', asesor: false }
const usuario3: Usuario = { id: 3, nombre: 'Francisco', avatar: '/assets/user-3.jpg', asesor: false }
const usuario4: Usuario = { id: 4, nombre: 'Angie', avatar: '/assets/user-4.jpg', asesor: false }
const usuario5: Usuario = { id: 4, nombre: 'Pilar', avatar: '/assets/user-5.jpg', asesor: false }

const listaDetallePQR: DetallePQR[] = [
    {
        id: 1, fechaRadicado: '27/04/2021', descripcion: 'descripción 1', numeroRadicado: '12334-345456-456',
        mensajes: [
            { id: 24, mensaje: 'Buenas tardes, radico factura pendiente del mes de Agosto del proveedor Pilar S.A.', fecha: '27/04/2021', usuario: usuario5, adjunto: '/assets/factura.jpg' }
        ]
    },
    {
        id: 2, fechaRadicado: '03/09/2020', descripcion: 'descripción 2', numeroRadicado: '3453-32436-47667',
        mensajes: [
            { id: 6, mensaje: 'Buenas tardes, la aplicación no me permite ingresar', fecha: '03/09/2020', usuario: usuario3 },
            { id: 7, mensaje: 'Buenas tardes, ¿me puede indicar por favor su número de cédula?', fecha: '03/09/2020', usuario: usuario1 },
            { id: 8, mensaje: '103258698', fecha: '03/09/2020', usuario: usuario3 },
            { id: 7, mensaje: 'Un momento por favor, estoy validando la información', fecha: '03/09/2020', usuario: usuario1 },
            { id: 9, mensaje: 'Señor Francisco, la contraseña de su cuenta se encuentra bloqueada por número de intentos.', fecha: '03/09/2020', usuario: usuario3 },
            { id: 10, mensaje: '¿y en ese caso que tengo que hacer?.', fecha: '03/09/2020', usuario: usuario3 },
            { id: 11, mensaje: 'Debido a que no es la primera vez que ocure, debe acercarse a una sucursal y solicitar un turno para cambiar la contraseña.', fecha: '03/09/2020', usuario: usuario1 },
        ]
    },
    {
        id: 3, fechaRadicado: '15/05/2020', descripcion: 'descripción 3', numeroRadicado: '2342344-4556-987',
        mensajes: [
            { id: 12, mensaje: 'Hola, quisiera solicitar una certificación de mi afiliación', fecha: '15/05/2020', usuario: usuario4 },
            { id: 13, mensaje: 'Desde luego, por favor indíqueme su número de cédula por favor', fecha: '15/05/2020', usuario: usuario1 },
            { id: 14, mensaje: '1025465461', fecha: '15/05/2020', usuario: usuario4 },
            { id: 15, mensaje: 'Un momento por favor, estoy validando la información.', fecha: '15/05/2020', usuario: usuario1 },
            { id: 16, mensaje: 'Seórita Angie, su certificado fue generado exitosamente y enviado a su cuenta de correo.', fecha: '15/05/2020', usuario: usuario1 },
            { id: 17, mensaje: 'Excelente. Muchas gracias.', fecha: '15/05/2020', usuario: usuario4 },
            { id: 18, mensaje: 'Buenos días, estuve esperando, pero la certificación no llegó a mi correo.', fecha: '16/05/2020', usuario: usuario4 },
            { id: 19, mensaje: 'Buenos días, por favor verifique su bandeja de correo no deseado.', fecha: '16/05/2020', usuario: usuario1 },
            { id: 20, mensaje: 'Ya lo hice, no aparece nada.', fecha: '16/05/2020', usuario: usuario4 },
            { id: 21, mensaje: 'Entiendo. Voy a proceder a generar de nuevo la certificación y a enviarla por este medio.', fecha: '16/05/2020', usuario: usuario1 },
            { id: 22, mensaje: 'Señorita Angie, adjunto la certificación generada.', fecha: '16/05/2020', usuario: usuario1, adjunto: '/assets/certificacion.jpg' },
            { id: 23, mensaje: 'Perfecto, ya la tengo. Muchas gracias', fecha: '16/05/2020', usuario: usuario4 },
        ]
    },
    {
        id: 4, fechaRadicado: '20/03/2020', descripcion: 'descripción 4', numeroRadicado: '456345-345786-567',
        mensajes: [
            { id: 1, mensaje: 'Buenos días', fecha: '20/03/2020', usuario: usuario2 },
            { id: 2, mensaje: 'Buenos días, en que le puedo colaborar', fecha: '20/03/2020', usuario: usuario1 },
            { id: 3, mensaje: 'Necesito solicitar un crédito de vivienda, ¿Me pueden colaborar?', fecha: '20/03/2020', usuario: usuario2 },
            { id: 4, mensaje: 'Claro que sí, por favor envíeme una copia de su cédula para iniciar el proceso', fecha: '20/03/2020', usuario: usuario1 },
            { id: 5, mensaje: 'Buenos días, en que le puedo colaborar', fecha: '20/03/2020', usuario: usuario1 },
        ]
    },
]

export default listaDetallePQR;