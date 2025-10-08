"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    //Constructor de la clase
    function Project(name, budget) {
        this.name = name;
        this.budget = budget;
    }
    //Métodos o funciones asociadas a una clase
    Project.prototype.printBudget = function () {
        console.log("".concat(this.name, " has a budget of ").concat(this.budget));
    };
    return Project;
}());
// Crear un objeto -> instanciar la clase
var niceProject = new Project('Proyecto chulo', 100000);
niceProject.printBudget();
