export {}

let firstName:string = "Diego";
let isAdmin:boolean = false;
let age:number = 30;

let duties = ['write code', 'fix bugs'];

let car = null;
let bicycle = undefined;

let work = () => {
    console.log("working...");
}   

// BigInt
//let salary = 50n;

// Identificador único e inmutable
let icon = Symbol("icon");

let all = [firstName, isAdmin, age, duties, car, bicycle, work, icon];  

for (let item of all) {
    console.log(String(item) + ' is ' + typeof item );
}