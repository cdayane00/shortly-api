import dotenv from 'dotenv';
dotenv.config();
import userRepository from '../repositories/userRepositoy.js';
import jwt from 'jsonwebtoken';


const tokenMiddleware = async (request, response, next) => {
    const {authorization} = request.headers;
    if(!authorization){
        return response.status(401).json({
            error: 'unauthorized1'
        });
    }

    const token = authorization;
    console.log(token);
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await userRepository.getUserById(decoded.userId);
        if(!user){
            return response.status(401).json({
                error: 'unauthorized3'
            });
        }
        response.locals.user = user;
        next();
    } catch(error){
        response.status(500).json({
            error: error.message
        });
    }
} 

export default tokenMiddleware;