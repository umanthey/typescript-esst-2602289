class Person {
    name;
    static field = "Hey!";
    constructor(name) {
        this.name = name;
    }
}
export function Demo() {
    const person = new Person("Ted");
    console.log(person.name); // output
    console.log(Person.field); // output static field
}
Demo();
