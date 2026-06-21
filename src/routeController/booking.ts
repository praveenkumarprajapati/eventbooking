import express from 'express';
import { BookingInterface } from '../interfaces/bookingInterface.js';

export class BookingController {
    route = express.Router();
    bookingService: BookingInterface;

    constructor(bookingService: BookingInterface) {
        this.bookingService = bookingService;
        this.route.get('/:id', this.get);
        this.route.post('/', this.create);
        this.route.put('/:id', this.update);
        this.route.delete('/:id', this.delete);
    }

    async get(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const booking = await this.bookingService.get(id as string);
            if (booking) {
                res.json(booking);
            } else {
                res.status(404).json({ error: 'Booking not found' });
            }
            
        } catch (e) {
            res.status(500).json({ error: 'Failed to fetch booking' });
        }
    }

    async create(req: express.Request, res: express.Response) {
        try {
            const booking = await this.bookingService.create(req.body);
            res.status(201).json(booking);
        } catch (e) {
            res.status(500).json({ error: 'Failed to create booking' });
        }
    }

    async update(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const booking = await this.bookingService.update(id as string, req.body);
            res.json(booking);
        } catch (e) {
            res.status(500).json({ error: 'Failed to update booking' });
        }
    }

    async delete(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            await this.bookingService.delete(id as string);
            res.json({ message: 'Booking deleted successfully' });
        } catch (e) {
            res.status(500).json({ error: 'Failed to delete booking' });
        }
    }
}