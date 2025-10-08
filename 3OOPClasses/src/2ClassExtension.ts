export {}

class Project {
    name: string;
    budget: number;

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

const secretProject = new SecretProject(3);

// El presupuesto es secreto. Nos da el mensaje distinto porque hemos sobreescrito el método printBudget()
secretProject.printBudget();

