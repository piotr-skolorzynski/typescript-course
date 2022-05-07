import { BASE_URL } from './models/ApiSync';
import { Collection } from './models/Collection';

const collection = new Collection(BASE_URL);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
