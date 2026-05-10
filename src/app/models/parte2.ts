export class Inscripcion {
    dni: string = "";
    precio: number = 0;
    categoriaAlumno: string = ""; // "1", "2" o "3" para el select
    fechaInscripcion: string = "";
    email: string = "";
    curso: string = "";
    precioFinal: number = 0; // Campo extra para guardar el cálculo con descuento
}