"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ordenamiento = void 0;
class Ordenamiento {
    constructor(arreglo) {
        this.arreglo = arreglo;
        this.arreglo = arreglo;
    }
    get getSecondNumber() {
        this.ordenarArreglo();
        return this.arreglo[this.arreglo.length - 2];
    }
    ordenarArreglo() {
        this.arreglo = this.arreglo.sort((a, b) => a - b);
    }
}
exports.Ordenamiento = Ordenamiento;
