import { User } from './models/User';

const user = new User({ name: 'skolo', age: 39 });
console.log(user.get('name'));
console.log(user.get('age'));
