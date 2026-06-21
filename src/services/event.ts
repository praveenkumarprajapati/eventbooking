import { EventInterface } from "../interfaces/eventInterface.ts";
import { EventType } from "../types/event.ts";

export class EventService implements EventInterface {
    repo : EventInterface;
    constructor(repo: EventInterface) {
        this.repo = repo;
    }
    get(id: string): Promise<EventType> {
        return this.repo.get(id);
    }
    create(event: Omit<EventType, "id" | "createdAt" | "updatedAt">): Promise<EventType> {
        return this.repo.create(event);
    }
    update(id: string, event: Partial<Omit<EventType, "id" | "createdAt" | "updatedAt">>): Promise<EventType> {
        return this.repo.update(id, event);
    }
    delete(id: string): Promise<void> {
       return this.repo.delete(id);
    }
}