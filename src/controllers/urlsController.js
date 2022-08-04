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

    static getUrlById = async (request, response) => {
        const {id} = request.params;
        try{
            const url = await urlsRepository.getUrlById(id);

            if(!url){
                return response.status(404).json({
                    error: 'Url not found'
                });
            }

            response.status(200).json({
                id: url.id,
                shortUrl: url.shortUrl,
                url: url.url
            });
        }
        catch(error){
            response.status(500).json({
                error: error.message
            });
        }
    };

    static redirectUrl = async (request, response) => {
        const {shortUrl} = request.params;

        try{
            const url = await urlsRepository.redirectUrl(shortUrl);
            if(!url){
                return response.status(404).json({
                    error: 'URL not found'
                });
            }
            await urlsRepository.visitCount(shortUrl);
            response.redirect(url.url);
        }
        catch(error){
            response.status(500).json({
                error: error.message
            });
        }
    };
}