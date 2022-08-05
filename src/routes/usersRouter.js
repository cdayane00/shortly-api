import {Router} from 'express';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';
import usersController from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.get('/users/me', tokenMiddleware, usersController.getUserByIdUrl);

export default usersRouter;