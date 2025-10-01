type Person = {
    name: string;
};  

function printName(person: Person) {
    console.log(person.name);
}   

printName({
    name: "Diego"
})