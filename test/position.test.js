const assert = require('assert')
const position = require('../lib/position')
const otherClasses = require('../lib/otherClasses')

describe('Position Tests', () => {
    const permission1 = new otherClasses.Permission(
        'Can create files'
    )
    const permission2 = new otherClasses.Permission(
        ['Can log on to admin section']
    )
    const permission3 = new otherClasses.Permission(
        'Can create folder'
    )
    const permission4 = new otherClasses.Permission(
        'Can write'
    )

    let position1 = new position.Position(
        'Assistant Secretary', [permission1]
    );

    it('getName test', () => {
        assert.strictEqual(
            position1.getName(), 'Assistant Secretary'
        )
    })

    it('setName test', () => {
        position1.setName('Assistant Secretary')
        assert.strictEqual(
            position1.getName(), 'Assistant Secretary'
        )
    })

    it('getPermissions test', () => {
        const permissionList = position1.getPermissions();
        let permissionName = permissionList[0];
        permissionName = permissionName.getName();
        assert.strictEqual(
            permissionName,
            'Can create files'
        )
    })

    it('addSinglePermission test', () => {
        position1.addSinglePermission(
            permission2
        )
        const permissionList = position1.getPermissions();
        assert.strictEqual(
            permissionList.length, 2
        )
    })

    it('addPermissions test', () => {
        position1.addPermissions(
            [permission3, permission4]
        )
        const permissionList = position1.getPermissions();
        assert.strictEqual(
            permissionList.length, 4
        )
    })

    it('setPermissions test', () => {
        position1.setPermissions(
            [permission3, permission4]
        )
        const permissionList = position1.getPermissions();
        assert.strictEqual(
            permissionList.length, 2
        )
    })
})