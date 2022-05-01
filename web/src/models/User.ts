import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export const BASE_URL = 'http://localhost:3000/users';

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update); //it overwrites this.data with update object
  }

  fetch(): void {
    axios
      .get(`${BASE_URL}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`${BASE_URL}/${id}`, this.data);
    } else {
      axios.post(`${BASE_URL}`, this.data);
    }
  }
}
