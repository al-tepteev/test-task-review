// ./auth/services/AuthService.ts
import type { IUserRepository, IAuthService, UserOrNull } from '../types/index';

export class AuthService implements IAuthService {
  constructor(private userRepo: IUserRepository) {}

  async login(credentials: { username: string; password: string }): Promise<UserOrNull> {
    const users = await this.userRepo.fetchAll();
	
    return (
      users.find(u =>
        u.credentials.username  === credentials.username &&
        u.credentials.passphrase === credentials.password
      ) ?? null
    );
  }
}
