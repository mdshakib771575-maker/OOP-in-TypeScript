class Employee {

    constructor(public name: string, private salary: number
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

    describe(): string {

        return `${this.name} earns ${this.salary}`
    }
}

class Manager extends Employee {

    teamMember: number

    constructor(name: string, salary: number,temMember: number, ) {
        super(name, salary)
        this.teamMember = temMember
    }
}

const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);


const manager = new Manager("shakib",20000,20)
// console.log(manager.describe());