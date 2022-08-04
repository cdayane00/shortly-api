import {nanoid} from 'nanoid';
import urlsRepository from '../repositories/urlRepository.js';

export default class urlsController{
    static creatUrl = async(request, response) => {
        const {url} = request.body;
        const shortUrl = nanoid(8);

        const userId = response.locals.user.id;

        try{
            const urlCreated = await urlsRepository.creatUrl({
                url,
                shortUrl,
                userId
            });

            response.status(201).json({shortUrl});
        }
        catch(error){
            response.status(500).json({error: error.message});
        }
    };
}