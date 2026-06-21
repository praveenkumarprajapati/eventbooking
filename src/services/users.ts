import { EventInterface } from "../interfaces/eventInterface.ts";
import { UserInterface } from "../interfaces/userInterface.ts";
import { EventType } from "../types/event.ts";
import { User } from "../types/user.ts";

export class UserService implements UserInterface {
    repo : UserInterface;
    constructor(repo: UserInterface) {
        this.repo = repo;
    }
    get(id: string): Promise<User> {
        return this.repo.get(id);
    }
    create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
        return this.repo.create(user);
    }
    update(id: string, user: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>): Promise<User> {
        return this.repo.update(id, user);
    }
    delete(id: string): Promise<void> {
       return this.repo.delete(id);
    }
}