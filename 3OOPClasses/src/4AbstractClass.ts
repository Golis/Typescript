export {}

// Las clases abstractas sirven para tener una plantilla común que indica las necesidades básicas que hay que implementar
// Las clases abstractas pueden tener métodos no abstractos, pero al menos uno debe serlo siempre

abstract class AbstractProject {
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
    
    // Este método es abstracto y por tanto no tiene implementación, la tendrá en las clases hijas
    abstract makeDelivery(): void
}

class genAIProject extends AbstractProject{
    
    makeDelivery(): void {
        // meto la implementación que yo considere
        console.log('meto la implementación que yo considere');
    }
}

const niceProject = new genAIProject('Proyecto Chulo', 100000);

niceProject.makeDelivery();