// Create a server running on process.env.PORT or 3000

import express from 'express';
import cors from 'cors';
import { User } from './types/user.ts';
import { AuthorizeMiddleware } from './middlewares/authorize.ts';
import { EventController } from './routeController/event.ts';
import { EventRepo } from './repository/eventRepo.ts';
import { EventService } from './services/event.ts';
import { UserController } from './routeController/user.ts';
import { BookingController } from './routeController/booking.ts';
import { BookingService } from './services/booking.ts';
import { BookingRepo } from './repository/bookingRepo.ts';
import { UserService } from './services/users.ts';
import { UserRepo } from './repository/userRepo.ts';

// Adding user type for request
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  const userController = new UserController(new UserService(new UserRepo()));
  const eventController = new EventController(new EventService(new EventRepo()));
  const bookingController = new BookingController(new BookingService(new BookingRepo()));
  
  app.use(express.json());
  
  app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  }))
  
  app.get('/healthcheck', (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };
    try {
      res.send(healthcheck);
    } catch (error: any) {
      res.status(503).send({
        ...healthcheck,
        message: error?.message,
      });
    }
  });
  
  app.use(AuthorizeMiddleware);
  
  app.use("/api/v1/users", userController.route);
  app.use("/api/v1/events", eventController.route);
  app.use("/api/v1/bookings", bookingController.route);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }); 
}

main().catch((e) => {
    console.error('Failed to start server', e);
    process.exit(1);
});
