"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordenClass_1 = require("./classes/ordenClass");
const orden = new ordenClass_1.Ordenamiento([14, 31, 53, 6, 8, 32, 56, 1]);
const penultimoNumero = orden.getSecondNumber;
console.log(`Este es el penultimo numero mas grande: ${penultimoNumero}`);
