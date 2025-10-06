export{}

enum Position {
    Programmer = 'Programmer',
    HR = 'HR',
    CEO = 'CEO',
    Manager = 'Manager'
}

type Employee = {
    name: string
    salary: number,
    position: Position
}

function payBonus(employee: Employee){
    // Hacer condicionales evitando comparar con un string de forma directa
    if(employee.position === Position.CEO){

    }
}

type PositionType = 'Programmer' | 'HR' | 'CEO'

function payAnnualBonus (employee: Employee){
    let bonusPercent: number = 0;
    switch (employee.position){
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        default:
            // La ejecución nunca debería pasar por aquí, si hay posibilidades de que pase por aquí, significa que yo no he validado correctamente mi switch case
            const alert: never = employee.position;
            break;
    }
}