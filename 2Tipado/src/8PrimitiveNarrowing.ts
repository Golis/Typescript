export {}

function getNumberValue(arg: unknown): number {
    if(typeof arg === 'number'){
        return arg;
    }
    if(typeof arg === 'string'){
        return Number(arg);
    }
    throw new Error(`Unsoported type: ${typeof arg}, ${JSON.stringify(arg)}`);
}

console.log(getNumberValue('fsdfdfdsf'));
getNumberValue({});