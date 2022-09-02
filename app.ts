import { Ordenamiento } from "./classes/ordenClass";

const orden = new Ordenamiento([14, 31, 53, 6, 8, 32, 56, 1]);
const penultimoNumero = orden.getSecondNumber;

console.log(`Este es el penultimo numero mas grande: ${penultimoNumero}`);