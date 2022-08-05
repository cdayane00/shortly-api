import dotenv from 'dotenv';
dotenv.config();
import userRepository from '../repositories/userRepositoy.js';

export default class usersController{
    static getUserByIdUrl = async (request, response) => {
        const {user} = response.locals;

        try{
            const users = await userRepository.getUserByIdUrl(user.id);


            if(!users){
                return response.status(404).json({
                    message: 'User not found'
                });
            }
            if(user.id !== users.id){
                return response.status(401).json({
                    error: 'Unouthorization'
                });
            }

            if(users.visitCount == null){
                users.visitCount = 0;
                users.shortenedUrls = [];
            }
            response.status(200).json(users);
        }
        catch(error){
            response.status(500).json({
                error: error.message
            });
        }
    };

    static getRanking = async (request, response) => {
        try{
            const users = await userRepository.getUsersVisitCountRanking();
            response.status(200).json(users);
        }
        catch(error){
            response.status(500).json({
                error: error.message
            });
        }
    };
}