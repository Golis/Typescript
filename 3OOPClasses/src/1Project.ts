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

// Crear un objeto -> instanciar la clase
const niceProject = new Project('Proyecto chulo', 100000);
niceProject.printBudget();