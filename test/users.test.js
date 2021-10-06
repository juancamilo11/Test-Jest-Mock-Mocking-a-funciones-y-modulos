import axios from 'axios';
import Users from '../src/users.js';

jest.mock('axios');

test('should fetch users', () => {
    const users = [{name: 'Bob'},{name: 'Ana'},{name:'Michael'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);

    return Users.all().then(data => expect(data).toEqual(users));
});