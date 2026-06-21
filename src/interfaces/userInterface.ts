import { User } from "../types/user.js";

export interface UserInterface {
    get(id: string): Promise<User>;
    create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
    update(id: string, user: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): Promise<User>;
    delete(id: string): Promise<void>;
}