const {DataTypes} = require('sequelize')
const db = require('../utils/db')
const bcrypt = require('bcrypt')

const User = db.define('users',{


userId: {type: DataTypes.INTEGER(), allowNull: false, primaryKey: true, autoIncrement: true, field: 'user_id'},
name: {type: DataTypes.STRING(30), allowNull: false },
email: {type: DataTypes.STRING(255),allowNull: false, unique:true, validate:{isEmail:true}},
password: {type: DataTypes.STRING(555),allowNull: false},

},{timestamps: true, hooks:{

    beforeCreate: async(user)=>{

        const salt = await bcrypt.genSalt(10)
        const pass = await bcrypt.hash(user.password, salt)
        user.password = pass
    }

}})

module.exports = User