import userRepository from '../repositories/userRepositoy.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
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

    static signin = async (request, response) => {

        const {email, password} = request.body;

        try{
            const user = await userRepository.getUserByEmail(email);
            if(!user){
                return response.status(401).json({
                    error: 'Email or password is incorrect'
                });
            }

            const passwordValid = bcrypt.compareSync(password, user.password);
            if(!passwordValid){
                return response.staus(401).json({
                    error: 'Password is incorrect'
                });
            }

            const token = jwt.sign(
                {userId: user.id},
                process.env.SECRET,
                {expiresIn: '1h'}
            );
            response.status(200).json({token});
        }
        catch(error){
            response.status(500).json({
                error: error.message
            });
        }


    }
}