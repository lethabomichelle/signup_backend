const bcrypt = require('bcrypt');
const pool = require('../config/db')
const { validate } = require('deep-email-validator')

class User {

    static id = 1;

    static async create({ email, name, password }) {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const validationResult = await validate(email);

        if (!validationResult.valid) {
            return res.status(400).send({
                status: 'error',
                message: 'Email is not valid. Please try again!',
                reason: validationResult.reason
            });
        }

        const sql = `insert into signup_project.users (email, name, password) values ('${email}', '${name}', '${password}' )`;
        pool.execute(sql).then(result => {
            console.log(sql)
        });

        // console.log(email, name, password);
        return { _id: this.id++, email, name, password };
    }

    static async findOne(email) {
        const sql = `SELECT * FROM signup_project.users WHERE email = '${email}'`;
        pool.query(sql).then((result) => {
            return result[0][0];
        });
    }
}

module.exports = User;