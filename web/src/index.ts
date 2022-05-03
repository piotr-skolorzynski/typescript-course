import { User } from './models/User';

const user = new User({ name: 'skolo', age: 39 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'stefan' });
