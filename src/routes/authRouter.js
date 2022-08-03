import {Router} from 'express';
import authController from '../controllers/authController.js';
import schemaMiddleware from '../middlewares/schemaMiddleware.js';
import signUpSchema from '../schemas/signUpSchema.js';

const authRouter = Router();

authRouter.post('/signup',schemaMiddleware(signUpSchema),authController.signup);

export default authRouter;
