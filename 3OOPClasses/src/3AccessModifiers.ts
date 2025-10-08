export {}

// Por defecto, si no decimos lo contrario, el modificar en TypeScript es siempre public
// Private implica que no se puede acceder a las propiedades desde fuera de la clase
// Protected implica que podemos acceder a la propiedad desde la misma clase o subclases (heredadas)

class Project {
    // Podemos ahorrarnos esta declaración y hacerla implícita en el constructor
    private name: string;
    private budget: number;

    //Constructor de la clase
    constructor(name: string, budget: number){
        this.name = name;
        this.budget = budget;
    }

    //Métodos o funciones asociadas a una clase
    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`);
    }
    
}

// SecretProject hereda de Project todas sus propiedades anteriores
class SecretProject extends Project{

    secrecyLevel: 1 | 2 | 3;

    constructor(secrecyLevel: 1 | 2 | 3){
        super('Secret Project', 1000000);
        this.secrecyLevel = secrecyLevel
    }

    // Clase hija puede tener sus propios métodos
    // Podría declarar todos los métodos que considere necesarios

    override printBudget(): void {
        console.log('The budget is secret!!!');
    }
}


const niceProject = new Project('Proyecto chulo', 100000);

// Solo lo puedo hacer si name es public y por lo tanto accesible desde cualquier lugar
niceProject.name = 'Proyecto chulo';