const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            }
        ]
    })

    it('should add a new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Frank',
            room: 'Playroom'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users[0]).toEqual(user);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
    });

    it('should not remove invalid id user', () => {
        var user = users.removeUser('12');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var foundUser = users.getUser('2');
        expect(foundUser).toEqual(users.users[1]);
    });

    it('should not find invalid id user', () => {
        var foundUser = users.getUser('12');
        expect(foundUser).toBeFalsy();
    });

    it('should return 2 users in Node Course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return 1 user in React Course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});