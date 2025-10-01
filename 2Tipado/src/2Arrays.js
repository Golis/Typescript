"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var duties = ['write code'];
var duties2 = ['write code'];
duties.push('fix bugs');
duties2.push('fix bugs');
duties.map(function (duty) {
    console.log(duty.toUpperCase());
});
//Tuples: arrays con tipos fijos en cada posición
var employeeLockerCode = ['Diego', 1234, 5678];
employeeLockerCode = ['Maria', 4321, 8765];
// Mala práctica, si añadimos un nuevo elemento hay que incluir su tipo en la definición de la tupla
employeeLockerCode.push(12);
console.log(employeeLockerCode);
