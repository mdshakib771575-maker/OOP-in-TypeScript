class Employee {

    constructor(public name: string, protected salary: number
    ) { }

    get baseSalary(): number {
        return this.salary
    }

    get SalayeWithBonas(): number {
        return this.salary + 5000;
    }

    set baseSalary(newSalary: number) {

        if (newSalary < 0) {
            throw new Error("Salary cannot be nagetive value")
        }
        this.salary = newSalary
    }

    calculatePay(textRate: number) {

        return this.baseSalary - this.salary * textRate
    }
}

class Manager extends Employee {
    override calculatePay() {
        return this.salary + 5000
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number, public type: string) {
        super(name, salary)
    }

    override calculatePay(textRate: number) {
        return (this.salary + 3000) * this.salary * textRate
    }
}

const employee = new Employee("shakib", 20000);
const manager = new Manager("shakib", 30000);
const developer = new Developer("shakib", 30000, "Full-Stack");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.2));




