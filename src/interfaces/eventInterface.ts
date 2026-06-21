import { EventType } from "../types/event.js";

export interface EventInterface {
    get(id: string): Promise<EventType>;
    create(event: Omit<EventType, 'id' | 'createdAt' | 'updatedAt'>): Promise<EventType>;
    update(id: string, event: Partial<Omit<EventType, 'id' | 'createdAt' | 'updatedAt'>>): Promise<EventType>;
    delete(id: string): Promise<void>;
}