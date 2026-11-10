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
    temMember;
    // teamMember: number
    // constructor(name: string, salary: number,temMember: number, ) {
    //     super(name, salary)
    //     this.teamMember = temMember
    // }
    constructor(name, salary, temMember) {
        super(name, salary);
        this.temMember = temMember;
    }
    discribeWork() {
        return `${this.name} manages ${this.temMember} employes`;
    }
    discriveManager() {
        return `${this.name} erans ${this.salary}`;
    }
}
const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);
const manager = new Manager("shakib", 20000, 20);
console.log(manager.discribeWork());
console.log(manager.discribeWork());
export {};
