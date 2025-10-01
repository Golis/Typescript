import { randomBytes } from 'crypto'

// Usamos export si queremos publicar y exportar este objeto a los archivos d.ts. de forma que podamos crear un paquete de código
export type Employee = {
    name: string
    id: string
    email: string
    salary: number
}

function generateRandomId() {
    return randomBytes(10).toString('hex');
}

export function createEmployee(employeeName: string, salary: number): Employee {
    return {
        name: employeeName,
        id: generateRandomId(),
        // Interpolación
        email: `${employeeName}@coolcompany.com`,
        salary: salary
    }
}

const diego = createEmployee('Diego', 100000);
const maria = createEmployee('Maria', 80000);
const allNewEmployees = [diego, maria];

const sendWelcomeMessage = (employee: Employee) => {
    console.log(`To: ${employee.email}
    Hello ${employee.name}!
    Welcome to our awesome company!
    Your salary will be ${employee.salary}
    `)
}

allNewEmployees.forEach(employee => sendWelcomeMessage(employee))