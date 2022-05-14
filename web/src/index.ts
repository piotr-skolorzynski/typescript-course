import { Collection } from './models/Collection';
import { BASE_URL, User, UserProps } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(BASE_URL, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
