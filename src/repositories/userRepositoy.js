import sqlstring from 'sqlstring';
import db from '../bd/database.js';

export default class UserRepository{

    //criando usuario no banco de dados
    static createUser = async ({name, email, password}) => {
        const query = sqlstring.format('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email,password]);

        const {rows} = await db.query(query);
        return rows[0];

    }
    
    //pegando usuario pelo email
    static getUserByEmail = async (email) => {
        const query = sqlstring.format('SELECT * FROM users WHERE email = ?', [email]);

        const {rows} = await db.query(query);
        return rows[0];
    }

    //pegando usuario pelo id
    static getUserById = async (id) => {
        const query = sqlstring.format('SELECT * FROM users WHERE id = ?', [id]);
        const {rows} = await db.query(query);
        return rows[0];
    }

    static getUserByIdUrl = async (id) => {
        const query = sqlstring.format(
            `SELECT users.id,
            users.name, 
            SUM(urls."visitCount") AS "visitCount",
            json_agg(json_build_object(
                'id', urls.id,
                'url', urls.url,
                'shortUrl', urls."shortUrl",
                'visitCount', urls."visitCount"
            )) AS "shortenedUrls"
            FROM users 
            LEFT JOIN urls ON urls."userId" = users.id
            WHERE users.id = ? 
            GROUP BY users.id, users.name`,
            [id]);
        
            const {rows} = await db.query(query);
            return rows[0];
    };
}