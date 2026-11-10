abstract class Employee {

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

    abstract calculatePay() : number 
    // abstract getResorcess():string[]
    }


class Manager extends Employee {
     calculatePay() {
        return this.salary + 5000
    }
}

class Developer extends Employee {
          calculatePay() {
        return this.salary + 3000
    }
    }

    







