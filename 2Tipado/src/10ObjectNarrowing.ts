export {}

type Founder = {
    name: 'Diego',
    car: 'BMW'
} | {
    name: 'Juanjo',
    bike: 'Orbea'
}

function meetTheFounder(founder: Founder) {
    console.log(`Meeting with ${founder.name}`);
    if(founder.name === 'Diego'){
        console.log(`Founder's car is ${founder.car}`);
    }
    if(founder.name === 'Juanjo'){
        console.log(`Founder's bike is ${founder.bike}`);
    }   
}

meetTheFounder({name: 'Diego', car: 'BMW'});
meetTheFounder({name: 'Juanjo', bike: 'Orbea'});    