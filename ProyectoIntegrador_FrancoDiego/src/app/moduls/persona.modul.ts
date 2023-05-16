export class Persona {
    id: number;
    nombre: String;
    apellido: String;

    constructor(id: number, nombre: string, apellido: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}