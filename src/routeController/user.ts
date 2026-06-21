import express from 'express';
import { UserInterface } from '../interfaces/userInterface.ts';


export class UserController {
    route = express.Router();
    userService: UserInterface;

    constructor(userService: UserInterface) {
        this.userService = userService;
        this.route.get('/:id', this.get);
        this.route.post('/', this.create);
        this.route.put('/:id', this.update);
        this.route.delete('/:id', this.delete);
    }

    async get(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.get(id as string);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
            
        } catch (e) {
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    async create(req: express.Request, res: express.Response) {
        try {
            const user = await this.userService.create(req.body);
            res.status(201).json(user);
        } catch (e) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }

    async update(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            const user = await this.userService.update(id as string, req.body);
            res.json(user);
        } catch (e) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    async delete(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params;
            await this.userService.delete(id as string);
            res.json({ message: 'User deleted successfully' });
        } catch (e) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}