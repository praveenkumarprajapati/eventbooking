import { Booking } from "../types/booking.js";

export interface BookingInterface {
    get(id: string): Promise<Booking>;
    create(booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Promise<Booking>;
    update(id: string, booking: Partial<Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Booking>;
    delete(id: string): Promise<void>;
}