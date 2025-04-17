import type { User } from "./User";

export interface IUserRepository { fetchAll(): Promise<User[]> }