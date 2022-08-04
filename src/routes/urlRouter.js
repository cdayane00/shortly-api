import {Router} from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';
import urlSchema from '../schemas/urlSchema.js';
import urlsController from '../controllers/urlsController.js';
import schemaMiddleware from '../middlewares/schemaMiddleware.js';

const urlRouter = Router();

urlRouter.post('/urls/shorten', tokenMiddleware, schemaMiddleware(urlSchema), urlsController.creatUrl);
urlRouter.get('/urls/:id', urlsController.getUrlById);
urlRouter.get('/urls/open/:shortUrl', urlsController.redirectUrl);
urlRouter.delete('/urls/:id', tokenMiddleware, urlsController.deleteUrl);
export default urlRouter;