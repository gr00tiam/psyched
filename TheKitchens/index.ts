// server/index.js

import express from 'express';
import cors from 'cors';

// const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app: express.Application = express();

app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hi There')
});

app.get("/api", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});