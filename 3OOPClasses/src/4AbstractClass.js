"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Las clases abstractas sirven para tener una plantilla común que indica las necesidades básicas que hay que implementar
// Las clases abstractas pueden tener métodos no abstractos, pero al menos uno debe serlo siempre
var AbstractProject = /** @class */ (function () {
    //Constructor de la clase
    function AbstractProject(name, budget) {
        this.name = name;
        this.budget = budget;
    }
    //Métodos o funciones asociadas a una clase
    AbstractProject.prototype.printBudget = function () {
        console.log("".concat(this.name, " has a budget of ").concat(this.budget));
    };
    return AbstractProject;
}());
var genAIProject = /** @class */ (function (_super) {
    __extends(genAIProject, _super);
    function genAIProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    genAIProject.prototype.makeDelivery = function () {
        // meto la implementación que yo considere
        console.log('meto la implementación que yo considere');
    };
    return genAIProject;
}(AbstractProject));
var niceProject = new genAIProject('Proyecto Chulo', 100000);
