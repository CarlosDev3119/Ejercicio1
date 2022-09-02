import { OrdenInterface } from "../interfaces/ordenamiento";


export class Ordenamiento implements OrdenInterface {

    constructor(
    
        public arreglo: number[]
    
    ){

        this.arreglo = arreglo;
    
    }

    get getSecondNumber(){

        this.ordenarArreglo();
        
        return this.arreglo[ this.arreglo.length - 2 ];
    }

    ordenarArreglo(){
        
        this.arreglo = this.arreglo.sort((a, b) => a - b);
    }
}

