import userRepository from '../repositories/userRepositoy.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export default class UserController{
    static signup = async (request, response) =>{

        const {name, email, password} = request.body;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = bcrypt.hashSync(password,salt);

        try{
            const emailAlreadyExists = await userRepository.getUserByEmail(email);
            if(emailAlreadyExists){
                return response.status(409).json({error: "Email already exists"});
            }

            const user = await userRepository.createUser({name, password: passwordHash, email});
            response.sendStatus(201);

        }catch(error){
            response.status(500).json({error: error.message});
        }
    }
}