export {}

// Type aliases: manera de definir un objet y da darle forma

type Position = 'Programmer' | 'HR';

const myPosition: Position = 'Programmer';

// Modelo en Angular
type Colleague = {
    name: string;
    age: number;
    position: Position;
    greetBack?: Function
}

const colleague: Colleague = {
    name: 'Diego',
    age: 30,
    position: 'Programmer'
}

const myOtherColleague: {
    name: string;
    age: number;
    position: Position;
    tasks: string[];
} = {
    name: 'Maria',  
    age: 25,
    position: 'HR',
    tasks: ['interviews', 'payroll']
}

const myTalkyColleague: Colleague = {
    name: 'Ana',
    age: 28,
    position: 'Programmer',
    greetBack: ()=>{
        console.log('Cheers!!!');
    }
}

function greetColleague(colleague: Colleague){
    console.log('Hi ' + colleague.name);
    if(colleague.greetBack){
        colleague.greetBack();
    }
}

greetColleague(colleague);
greetColleague(myOtherColleague); // No da error aunque no sea de tipo Colleague. Lo que va a hacer es aceptarlo mientras tenga las propiedades mínimas que tiene un tipo Colleague e Ignorará el resto de propiedades no reconocidas
greetColleague(myTalkyColleague);