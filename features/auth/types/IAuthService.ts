import type { UserOrNull } from "./UserOrNull";

export interface IAuthService {
  login(creds: { username: string; password: string }): Promise<UserOrNull>
}