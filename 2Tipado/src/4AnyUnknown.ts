export {}

let queryResult: any; // Tipo any desactiva las comprobaciones de tipo (mala práctica)

queryResult = '5';
queryResult = [5];

function getSalararyFromExternalService(employeeId: number): unknown{
    return JSON.parse('{"salary": 5000}');
}

let salary = getSalararyFromExternalService(123);

// Usando any, la siguiente sentencia no falla, sin embargo, no existe la propiedad 'number' en el objeto retornado
// salary.number;

if(typeof salary === 'number'){ //type narrowing
    salary++;
}

if(typeof salary === 'string'){ //type narrowing
    salary.includes('$');
}

if(typeof salary  === 'string' || typeof salary === 'number'){
    salary.valueOf(); // Podemos usar métodos comunes a ambos tipos
}

if(salary && typeof salary === 'object' &&'history' in salary && Array.isArray(salary.history))
{
    salary.history.push(5000); // Ahora sí podemos usar la propiedad history
}


