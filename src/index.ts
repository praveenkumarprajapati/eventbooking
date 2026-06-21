// Create a server running on process.env.PORT or 3000

import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

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

app.use()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 