const assert = require('assert');
const staff = require('../lib/staff');

describe('Staff tests', () => {
    let john = new staff.Staff('John', 'Doe', 23, 5000)
    it('getLeaveStatus method test', () => {
        assert.strictEqual(john.getLeaveStatus(), false)
    })

    it('setLeaveStatus method test', () => {
        john.setLeaveStatus(true);
        assert.strictEqual(john.getLeaveStatus(), true)
    })

    it('getFullname method test', () => {
        assert.strictEqual(
            john.getFullName(), 'Doe John'
        )
    })

    it('getAge method test', () => {
        assert.strictEqual(john.getAge(), 23)
    })

    it('setAge method test', () => {
        john.setAge(17)
        assert.strictEqual(john.getAge(), 17)
    })

    it('setSalary method test', () => {
        john.setSalary(12000)
        assert.strictEqual(john.getSalary(), 12000)
    })

    it('getEmploymentDate method test', () => {
        let testDay = new Date();
        testDay.getDate()
        assert.strictEqual(
            john.getEmploymentDate().getDate(),
            testDay.getDate()
        )
    })

    it('getPosition method test', () => {
        // TODO: replace with a value when Position
        // class has been created
        assert.strictEqual(
            john.getPosition(), undefined
        )
    })

    it('getLeaveType method test', () => {
        // TODO: replace with a value when LeaveType
        // class has been created
        assert.strictEqual(
            john.getLeaveType(), undefined
        )
    })

    it('getLeaveReturnDate method test', () => {
        assert.strictEqual(
            john.getLeaveReturnDate(), undefined
        )
    })

    it('setLeaveReturnDate method test', () => {
        const now = new Date();
        john.setLeaveReturnDate(now);
        assert.strictEqual(
            john.getLeaveReturnDate(), now
        )
    })
})

describe('Staff Variable Unwanted Access Test', () => {
    let john = new staff.Staff('John', 'Doe', 23, 5000)
    
    it('firstName field', () => {
        assert.strictEqual(john.firstName, undefined)
    })
    
    it('age field', () => {
        assert.strictEqual(john.age, undefined)
    })
    
    it('salary field', () => {
        assert.strictEqual(john.salary, undefined)
    })
    
    it('lastName field', () => {
        assert.strictEqual(john.lastName, undefined)
    })
    
    it('dateEmployed field', () => {
        assert.strictEqual(john.dateEmployed, undefined)
    })
    
    it('position field', () => {
        assert.strictEqual(john.position, undefined)
    })
    
    it('onLeave field', () => {
        assert.strictEqual(john.onLeave, undefined)
    })
    
    it('leaveReturnDate field', () => {
        assert.strictEqual(john.leaveReturnDate, undefined)
    })
    
    it('leaveType field', () => {
        assert.strictEqual(john.leaveType, undefined)
    })
})