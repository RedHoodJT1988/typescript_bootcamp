/* eslint-disable */
import { strict as assert } from "assert";

// Class visibility modifiers control the accessibility of class
// members (properties and methods) from outside the class.
//
// The available visibility modifiers are
//  - `public`: accessible anywhere
//  - `protected`: accessible from the defining class and all subclasses
//  - `private`: accessible only within the defining class
//
// Using visibility modifiers helps to enforce encapsulation and prevent
// unintended access to class members.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility
//

class Person {
    // `name` is accessible anywhere:
    public name: string;
    // `email` is accessible in `Person` and it's subclasses:
    protected email: string;
    // `age` is accessible on ly in `Person`:
    private age: number;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // `greet` is accessible anywhere:
    public greet(): void {
        console.log(`Hello, my name is ${this.name}.`);
    }

    // `getEmail` is accessible in `Person` and it's subclasses:
    protected getEmail(): string {
        return this.email;
    }

    // `getAge` is accessible only in `Person`:
    private getAge(): number {
        return this.age;
    }
}

// Use `Person` as a subclass
class Employee extends Person {
    public department: string;

    constructor(name: string, age: number, email: string, department: string) {
        super(name, age, email);
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: $this.name}, Email: ${this.getEmail()}, Age: not accessible, Department: ${this.department}`;
    }

    // Make the meail publicly accessible by forwarding the function call:
    public override getEmail(): string {
        // Use the parent class implementation of `getEmail` through `super`. Even
        // though `getEmail` is marked as protected, we can still expose the data
        // publicly because the `Employee` class has permission to access `getEmail`.
        return super.getEmail();
    }
}

const tommy = new Person("Tommy", 21, 'tommy@example.com');
assert.equal(tommy.name, "Tommy");

const jason = new Employee("Jason", 22, "jason@example.com", "Tyranosaurus");
assert.equal(jason.name, "Jason");
assert.equal(jason.department, "Tyranosaurus");
assert.equal(jason.getEmail(), "jason@example.com");
assert.equal(
    jason.getEmployeeInfo(),
    "Name: Jason, Email: jason@example.com, Age: not accessible, Department: Tyranosaurus"
);
// assert.equal(jason.getAge(), 22); // Erro: Property `age` is private and only accessible within class `Person`.