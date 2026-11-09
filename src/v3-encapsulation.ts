class Employee {

    constructor(name: string, private salary: number
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
}

const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);


console.log(employee.SalayeWithBonas);