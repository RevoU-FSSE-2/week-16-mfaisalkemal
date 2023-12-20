import { Express } from 'express';
import helmet from './helmet';
import bodyParser from './bodyParser';
import cookieParser from './cookieParser';

export default (app: Express) => {
  bodyParser(app);
  cookieParser(app);
  helmet(app);
};
