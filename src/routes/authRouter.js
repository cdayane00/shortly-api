import {Router} from 'express';
import authController from '../controllers/authController.js';
import schemaMiddleware from '../middlewares/schemaMiddleware.js';
import signUpSchema from '../schemas/signUpSchema.js';
import signInSchema from '../schemas/signInSchema.js';
const authRouter = Router();

authRouter.post('/signup',schemaMiddleware(signUpSchema),authController.signup);
authRouter.post('/signin', schemaMiddleware(signInSchema), authController.signin);


export default authRouter;
