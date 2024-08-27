const bcrypt = require('bcrypt');
const pool = require('../config/db')

class User {

    static id = 1;

    static async create({ email, name, password }) {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const sql = `insert into signup_project.users (email, name, password) values ('${email}', '${name}', '${password}' )`;
        pool.execute(sql).then(result => {
            console.log(sql)
        });

        // console.log(email, name, password);
        return { _id: this.id++, email, name, password };
    }


    static findOne(email) {
        // todo: get user from db
        return { email: "lethabo@email", name: "lethabo", password: "psdds" }
    }
}

module.exports = User;