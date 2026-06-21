import express from 'express';
import { EventInterface } from '../interfaces/eventInterface.ts';

export class EventController {
    route = express.Router();
    eventService: EventInterface;

    constructor(eventService: EventInterface) {
        this.eventService = eventService;
        this.route.get('/:id', this.get);
        this.route.post('/', this.create);
        this.route.put('/:id', this.update);
        this.route.delete('/:id', this.delete);
    }

    async get(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const event = await this.eventService.get(id as string);
            if (event) {
                res.json(event);
            } else {
                res.status(404).json({ error: 'Event not found' });
            }
            
        } catch (e) {
            res.status(500).json({ error: 'Failed to fetch event' });
        }
    }

    async create(req: express.Request, res: express.Response) {
        try {
            const event = await this.eventService.create(req.body);
            res.status(201).json(event);
        } catch (e) {
            res.status(500).json({ error: 'Failed to create event' });
        }
    }

    async update(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const event = await this.eventService.update(id as string, req.body);
            res.json(event);
        } catch (e) {
            res.status(500).json({ error: 'Failed to update event' });
        }
    }

    async delete(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            await this.eventService.delete(id as string);
            res.json({ message: 'Event deleted successfully' });
        } catch (e) {
            res.status(500).json({ error: 'Failed to delete event' });
        }
    }
}