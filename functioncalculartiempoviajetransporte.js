function calculartiempoviajetransporte(distancia, velocidadpromedio, transoorte) {
    if(transoorte == 'auto'){
        velocidadpromedio =100;
        return distancia / velocidadpromedio;

    }
    if(transoorte == 'bicicleta'){
        velocidadpromedio =15;
        return distancia / velocidadpromedio;
    }
    }




// ejemplo de uso 
const distancia= 600 // en kilometros 
const velocidadpromedio= 80; // en kilometros por hora 
const tiempoviaje= calculartiempoviajetransporte(distancia, velocidadpromedio);
console.log("el tiempo de viaje es: "+ tiempoviaje + "hors");














