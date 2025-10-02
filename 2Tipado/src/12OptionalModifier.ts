export{}

type BonusPercent = 10 | 20 | 30

type Salary = {
    amount: number,
    currency: 'USD' | 'EUR',
    yearlyBonus?: BonusPercent
    //yearlyBonus: BonusPercent | undefined
}

type Employee = {
    firstName: string,
    salary: Salary
}

const diegoSalary: Salary = {
    amount: 5000,
    currency: 'USD',
    yearlyBonus: 20
}

const diego: Employee = {
    firstName: 'Diego',
    salary: diegoSalary
}

function paySalary(employee: Employee, extraWork?: string){ 
    console.log(`Paying salary of ${employee.salary.amount} ${employee.salary.currency} to ${employee.firstName}`);
    if(employee.salary.yearlyBonus){
        console.log(`Including yearly bonus of ${employee.salary.yearlyBonus}%`);
    }
    if(extraWork){
        console.log(`${employee.firstName} received an extra salary because of hard work in: ${extraWork}`);
    }
}

paySalary(diego);
paySalary(diego, 'Project XXX');
