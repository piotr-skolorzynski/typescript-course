import { User } from './models/User';

const user = new User({ id: 1, name: 'mleko', age: 32 });

user.on('save', () => {
  console.log(user);
});

user.save();
