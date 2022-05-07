import { BASE_URL } from './models/ApiSync';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = new Collection<User, UserProps>(
  BASE_URL,
  (json: UserProps) => User.buildUser(json)
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
