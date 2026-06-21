import { UserInterface } from "../interfaces/userInterface.js";
import { User } from "../types/user.js";

export class UserRepo implements UserInterface {
    get(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, user: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}