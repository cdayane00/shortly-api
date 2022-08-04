import {Router} from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';
import urlSchema from '../schemas/urlSchema.js';
import urlsController from '../controllers/urlsController.js';
import schemaMiddleware from '../middlewares/schemaMiddleware.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', tokenMiddleware, schemaMiddleware(urlSchema), urlsController.creatUrl);

export default urlRouter;