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
    describe() {
        return `${this.name} earns ${this.salary}`;
    }
}
class Manager extends Employee {
    teamMember;
    constructor(name, salary, temMember) {
        super(name, salary);
        this.teamMember = temMember;
    }
}
const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);
const manager = new Manager("shakib", 20000, 20);
console.log(manager.describe());
export {};
