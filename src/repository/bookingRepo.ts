import { BookingInterface } from "../interfaces/bookingInterface.js";
import { Booking } from "../types/booking.js";

export class BookingRepo implements BookingInterface {
    get(id: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    create(booking: Omit<Booking, "id" | "createdAt" | "updatedAt">): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    update(id: string, booking: Partial<Omit<Booking, "id" | "createdAt" | "updatedAt">>): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}