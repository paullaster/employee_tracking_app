/**
 * Employee records App
 */
class Employee {
    constructor (fname, lname, datajoined) {
        this.fname = fname;
        this.lname = lname;
        this.datajoined = datajoined;
    }
    get name () { return this.fname + ' ' + this.lname; };
    get lengthOfService () {
        /**
         * if 1 second = 1000 milliseconds,
         * :. ?       = yearsOfExperience
         * if 60 seconds = 1 minute,
         * :. yearsOfExperience(s) = ?
         */
        let yearsOfExperience = Math.abs(new Date () - new Date (this.datajoined));
        return Math.ceil(((yearsOfExperience / 1000) / 3600)/ 8784);
    };
};

let emp1 = new Employee ('Paullaster', 'Okoth', '2020-10-01');

console.log(emp1.lengthOfService);

