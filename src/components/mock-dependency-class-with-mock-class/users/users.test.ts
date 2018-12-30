import { Users } from './users';

jest.mock('../common/http'); // will force the to use mocked class

describe('Users',()=>{

    let instance: Users;

    beforeEach(()=>{
        instance = new Users();
    });

    it('should get all users as as array', async () => {
        expect(instance).toBeInstanceOf(Users);

        const allUsers = await instance.all();

        expect(allUsers).toBeDefined();
        expect(allUsers[0]).toBeDefined();

        expect(allUsers[0].id).toEqual(4);
    });
});