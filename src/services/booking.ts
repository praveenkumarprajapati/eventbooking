import { BookingInterface } from "../interfaces/bookingInterface.js";
import { Booking } from "../types/booking.js";

export class BookingService implements BookingInterface {
    repo : BookingInterface;
    constructor(repo: BookingInterface) {
        this.repo = repo;
    }
    get(id: string): Promise<Booking> {
        return this.repo.get(id);
    }
    create(booking: Omit<Booking, "id" | "createdAt" | "updatedAt">): Promise<Booking> {
        return this.repo.create(booking);
    }
    update(id: string, booking: Partial<Omit<Booking, "id" | "createdAt" | "updatedAt">>): Promise<Booking> {
        return this.repo.update(id, booking);
    }
    delete(id: string): Promise<void> {
       return this.repo.delete(id);
    }
}