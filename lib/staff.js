class Staff {
    #lastName;
    #firstName;
    #age;
    #salary;
    #dateEmployed;
    #position;
    #onLeave;
    #leaveReturnDate;
    #leaveType;

    constructor(firstName, lastName, age, salary) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#salary = salary;
        this.#dateEmployed = new Date();
        this.#position = undefined;
        this.#onLeave = false;
        this.#leaveReturnDate = undefined;
        this.#leaveType = undefined;
    }

    getLeaveStatus() {
        return this.#onLeave;
    }

    getFullName() {
        return `${this.#lastName} ${this.#firstName}`;
    }

    getAge() {
        return this.#age;
    }
    
    getSalary() {
        return this.#salary;
    }

    getEmploymentDate() {
        return this.#dateEmployed;
    }

    getPosition() {
        return this.#position;
    } // TODO: write setter method for this.position

    getLeaveType() {
        return this.#leaveType;
    }

    getLeaveReturnDate() {
        return this.#leaveReturnDate;
    }

    setLeaveStatus(status) {
        this.#onLeave = status;
    }
    
    setAge(age) {
        this.#age = age;
    }
    
    setSalary(salary) {
        this.#salary = salary;
    }

    setLeaveReturnDate(returnDate) {
        this.#leaveReturnDate = returnDate;
    }
}


exports.Staff = Staff;
