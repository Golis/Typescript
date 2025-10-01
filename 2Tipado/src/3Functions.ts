export {}

// function greet(name: string): string {}
function greet(name: string){
    return ('Hello ' + name);
}

const diegoGreet = greet('Diego');

function greetToUpperCase(name: string): string {
    return greet(name).toUpperCase();
}   

function consoleGreetDiego(name = 'Diego'): void {
    console.log(greet(name).toUpperCase());
}

consoleGreetDiego();
consoleGreetDiego('Maria');

const greetToConsole = (name: string) => {   
    console.log(greet(name).toUpperCase());
}

function greetMultiple(... names: string[]): void {
    names.forEach(name => {
        console.log(greet(name).toUpperCase());
    });
}

greetMultiple('Diego', 'Maria', 'Ana');
greetMultiple('Diego');