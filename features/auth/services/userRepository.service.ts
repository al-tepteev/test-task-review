// ./auth/services/userRepository.ts
import type { IUserRepository } from '../types/IUserRepository';
import type { User } from '../types/User';

export class UserRepository implements IUserRepository {
  constructor(private endpoint: string = '/data/users.json') {}

  async fetchAll(): Promise<User[]> {
    try {
      const response = await fetch(this.endpoint);

      if (!response.ok) {
        throw new Error(`Ошибка при получении пользователей: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (err) {
      console.error('UserRepository.fetchAll error:', err);
      
      return [];
    }
  }
}
