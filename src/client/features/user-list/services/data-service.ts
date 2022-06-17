import { UserList } from '../models/user-list';

export class DataService {
  getUser(): Promise<UserList[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Vinod',
          },
          {
            id: 1,
            name: 'piyush',
          },
        ]);
      }, 0);
    });
  }
}

export const dataService = new DataService();
