/**
 * Employee records App
 */
class Employee {
    #fname;
    #lname;
    #datajoined;
    constructor (fname, lname, datajoined) {
        this.#fname = fname;
        this.#lname = lname;
        this.#datajoined = datajoined;
    }
    get name () { return this.#fname + ' ' + this.#lname; };
    get lengthOfService () {
        /**
         * if 1 second = 1000 milliseconds,
         * :. ?       = yearsOfExperience
         * if 60 seconds = 1 minute,
         * :. yearsOfExperience(s) = ?
         */
        let yearsOfExperience = Math.abs(new Date () - new Date (this.#datajoined));
        return Math.ceil(((yearsOfExperience / 1000) / 3600)/ 8784);
    };
    getEmployeeDetails () {
        return {
            'Employee Name' : this.name,
            'Years of Experience': this.lengthOfService
        }
    }
};

const emp1 = new Employee ('Paullaster', 'Okoth', '2020-10-01');
const emp2 = new Employee ('Basil', 'Otieno', '2012-05-06');

const employeeList = [emp1, emp2];
employeeList.forEach(emp => {
    console.log(emp.getEmployeeDetails());
});

