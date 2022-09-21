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
        
    }
};

console.log(typeof '2022-09-20')