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
}