class Employee {
    salary;
    constructor(name, salary) {
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
}
const employee = new Employee("shakib", 20000);
const employee2 = new Employee("shakib", 20000);
console.log(employee.SalayeWithBonas);
export {};
