export {}

type Programmer = 'Programmer';
type HR = 'HR';

let bestProgrammer: Programmer = 'Programmer';

type PositionType = Programmer | HR;

type Position = | 'Programmer' | 'HR' | 'CEO';

function getSalaryForPosition(position: Position): number | undefined {  
    if(position === 'Programmer'){
        return 5000;
    }
    if(position === 'HR'){
        return 4000;
    }
    console.warn('Position not found ' + position);
}