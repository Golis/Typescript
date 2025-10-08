// Clase base: Vehículo
class Vehiculo {
    marca: string;
    modelo: string;
    year: number;
  
    constructor(marca: string, modelo: string, year: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.year = year;
    }
  
    arrancar(): void {
      console.log(`${this.marca} ${this.modelo} ha arrancado.`);
    }
  
    detener(): void {
      console.log(`${this.marca} ${this.modelo} se ha detenido.`);
    }
  }
  
  // Clase derivada: Coche
  class Coche extends Vehiculo {
    numPuertas: number;
  
    constructor(marca: string, modelo: string, year: number, numPuertas: number) {
      super(marca, modelo, year);
      this.numPuertas = numPuertas;
    }
  
    tocarClaxon(): void {
      console.log(`${this.marca} ${this.modelo} está tocando el claxon.`);
    }
  }
  
  // Clase derivada: Motocicleta
  class Motocicleta extends Vehiculo {
    tipoManillar: string;
  
    constructor(marca: string, modelo: string, year: number, tipoManillar: string) {
      super(marca, modelo, year);
      this.tipoManillar = tipoManillar;
    }
  
    hacerWheelie(): void {
      console.log(`${this.marca} ${this.modelo} está haciendo un wheelie.`);
    }
  }
  
  // Crear instancias de Coche y Motocicleta
  const miCoche = new Coche('Toyota', 'Corolla', 2020, 4);
  const miMoto = new Motocicleta('Yamaha', 'MT-07', 2019, 'Deportivo');
  
  // Uso de métodos
  miCoche.arrancar();
  miCoche.tocarClaxon();
  miCoche.detener();
  
  miMoto.arrancar();
  miMoto.hacerWheelie();
  miMoto.detener();
  