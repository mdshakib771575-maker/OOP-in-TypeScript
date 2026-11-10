class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    get baseSalary() {
        return this.salary;
    }
    get SalayeWithBonas() {
        return this.salary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be nagetive value");
        }
        this.salary = newSalary;
    }
    calculatePay(textRate) {
        return this.baseSalary - this.salary * textRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.salary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, salary, type) {
        super(name, salary);
        this.type = type;
    }
    calculatePay(textRate) {
        return (this.salary + 3000) * this.salary * textRate;
    }
}
const employee = new Employee("shakib", 20000);
const manager = new Manager("shakib", 30000);
const developer = new Developer("shakib", 30000, "Full-Stack");
console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.2));
export {};
