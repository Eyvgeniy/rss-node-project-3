import express from 'express';
const app = express();
import db from './db.js';
import user from './controllers/usercontroller.js';
import game from './controllers/gamecontroller.js';
import validateMiddleware from './middleware/validate-session.js';

db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(validateMiddleware);
app.use('/api/game', game);
app.listen(4000, function () {
  console.log('App is listening on 4000');
});
