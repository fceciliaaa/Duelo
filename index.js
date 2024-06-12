class card {
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}

class unidad extends card{
    constructor(nombre, costo, poder,resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia;
    }
    unidadElegida(){
        console.log(`${this.nombre}`);
    }
    ataca(target){ //este metodo define como una unidad puede atacar a otra //target es la unidad del oponente que está siendo atacada o sobre la que se está aplicando un efecto
        target.resiliencia -= this.poder;
        //`target.res` representa la resistencia (vida) actual de la unidad objetivo y `this.poder` es el poder de ataque de la unidad atacante.
        console.log(`El jugador ${this.nombre} ataca al jugador ${target.nombre}`);
    }
}

class efectos extends card{
    constructor(nombre, costo, texto, stat, magnitud){
        super(nombre, costo);
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }
    aplicarEfectos(target){ //este metodo es responsable de aplicar un efecto a la unidad
        if (this.stat === "Resiliencia"){
            target.resiliencia += this.magnitud;
        }
        if(this.stat === "Poder"){
            target.poder += this.magnitud;
        }
        console.log(`Efecto elegido ${this.nombre}`);
        console.log(`${this.texto}`);
    }
    
}

//Jugadores
const ninja1 = new unidad("ninja cinturon rojo", 3, 3, 4);
const ninja2 = new unidad("ninja cinturon negro", 4, 5, 4);

//Efectos 
const efecto1 = new efectos("Algoritmo Dificil", 2, "Aumentar la resistencia del objetivo en 3", "Resiliencia", 3);
const efecto2 = new efectos("Rechazo de promesa no manejado", 1, "Reducir la resistencia del objetivo en 2", "Resiliencia", -2);
const efecto3 = new efectos("Programación en pareja", 3, "Aumentar el poder del objetivo en 2", "Poder", 2);

//Ataques
console.log("El jugador 1 convoca a:");
ninja1.unidadElegida();
efecto1.aplicarEfectos(ninja1);
console.log(ninja2);

console.log("El jugador 2 convoca a:");
ninja2.unidadElegida();
efecto2.aplicarEfectos(ninja1);
console.log(ninja1);

console.log("El jugador 1 convoca a:");
ninja1.unidadElegida();
efecto3.aplicarEfectos(ninja1);
console.log(ninja1);
