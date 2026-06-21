import {EventInterface} from "../interfaces/eventInterface.js";
import { EventType } from "../types/event.js";

export class EventRepo implements EventInterface {
    get(id: string): Promise<EventType> {
        throw new Error("Method not implemented.");
    }
    create(event: Omit<EventType, "id" | "createdAt" | "updatedAt">): Promise<EventType> {
        throw new Error("Method not implemented.");
    }
    update(id: string, event: Partial<Omit<EventType, "id" | "createdAt" | "updatedAt">>): Promise<EventType> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}