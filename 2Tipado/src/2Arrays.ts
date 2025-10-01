// Si comentamos export {}, duties dará un error de compilación por estar declarándose en el ámbito global
export{}

const duties: string[] = ['write code'];
const duties2: Array<string> = ['write code'];

duties.push('fix bugs');
duties2.push('fix bugs');

duties.map(duty => {
    console.log(duty.toUpperCase());    
});

//Tuples: arrays con tipos fijos en cada posición
let employeeLockerCode: [string, number, number] = ['Diego', 1234, 5678];
employeeLockerCode = [ 'Maria', 4321, 8765];
// Mala práctica, si añadimos un nuevo elemento hay que incluir su tipo en la definición de la tupla
employeeLockerCode.push(12);
console.log(employeeLockerCode);