class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);
console.log(employee);
console.log(employee2);
export {};
