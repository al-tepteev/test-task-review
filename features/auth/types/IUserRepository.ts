// features/auth/types/IUserRepository.ts
import type { User } from "./User";

export interface IUserRepository { fetchAll(): Promise<User[]> }