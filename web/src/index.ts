import { User } from './models/User';

const user = new User({ name: 'skolo', age: 39 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Stefan', age: 19 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ age: 40 });
console.log(user.get('age'));
console.log(user.get('name'));
