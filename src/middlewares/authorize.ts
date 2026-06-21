import express from 'express';

import jsonwebtoken from 'jsonwebtoken';
import { User } from '../types/user.ts';

export const AuthorizeMiddleware  = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded as User;
        next();
    } catch (e) {
        res.status(401).json({ error: 'Unauthorized' });
    }
}