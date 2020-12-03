class LeaveType {
    constructor(name) {
        this.name = name;
    }
}


class Permission {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName (newName) {
        this.#name = newName;
    }
}


exports.Permission = Permission;
exports.LeaveType = LeaveType;
