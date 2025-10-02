export {}

type Salary = {
    amount: number
}

// Type Guard function -> predicado que permite verificar un tipo en su totalidad
function isSalary(arg: any): arg is Salary {
    return (('amount' in arg) && (typeof arg.amount === 'number'));
}

function paySalary( arg: unknown){
    if(isSalary(arg)){
        console.log(`Paying salary of ${arg.amount}`);
    }
}

