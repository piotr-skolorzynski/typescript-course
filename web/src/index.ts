import { User } from './models/User';

// const user = new User({ id: 1 });

// user.set({ name: 'maciek', age: 37 });

// user.save();

const user2 = new User({ name: 'skolo', age: 39 });

// user2.save();

user2.events.on('change', () => {
  console.log('change!');
});

user2.events.trigger('change');
