import db from '../bd/database.js';
import sqlstring from 'sqlstring';

export default class urlsRepository{
    static creatUrl = async ({url, shortUrl, userId}) => {
        const query = sqlstring.format('INSERT INTO urls (url, "shortUrl", "userId") VALUES (?,?,?)', [url, shortUrl, userId]);
        const {rows} = await db.query(query);
        return rows[0];
    };

    static getUrlById = async (id) => {
        const query =  sqlstring.format('SELECT * FROM urls WHERE id = ?',[id]);
        const {rows} = await db.query(query);
        return rows[0];
    };
}