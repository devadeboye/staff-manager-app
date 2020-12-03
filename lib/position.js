class Position {
    #name;
    #permissions = [];

    constructor(name, listOfPermissions) {
        this.#name = name;
        this.#permissions = listOfPermissions;
    }

    getName() {
        return this.#name;
    }

    getPermissions() {
        return this.#permissions;
    }

    setName(newName) {
        this.#name = newName;
    }

    setPermissions(listOfPermissions) {
        this.#permissions = listOfPermissions;
    }

    addSinglePermission(permissionInstance) {
        this.#permissions.push(permissionInstance);
    }

    addPermissions(listOfPermissions) {
        for (let permissionInstance in listOfPermissions) {
            this.#permissions.push(permissionInstance);
        }
    }
}


exports.Position = Position;