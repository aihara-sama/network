import express from 'express';
import { join } from 'path';

const app = express();

app.get(/.js/, express.static(join(__dirname, 'public')));

app.use('*', (_req, res) => {
  res.sendFile(join(__dirname, './public/index.html'));
});

app.listen(8000, () => {
  console.log(`running 8000`);
});
