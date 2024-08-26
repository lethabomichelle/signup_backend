// const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');


class User {

    static id = 1;

    static create({ email, name, password }) {
        console.log(email, name, password);
        return { _id: this.id++, email, name, password };
    }

    static findOne({ email }) {
        return { email: "lethabo@email", name: "lethabo", password: "psdds" }
    }
}

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });

// // Not using arrow func because of '.this'
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password'))
//         next();

//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.matchPassword = async function (plainPassword) {
//     return await bcrypt.compare(plainPassword, this.password);
// }

// const User = mongoose.model('User', userSchema);

module.exports = User;