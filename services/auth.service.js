const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')

class authServices{

static genToken(payload){
try{ 
const token = jwt.sign(payload, 'clave',{algorithm:'HS512', expiresIn: '1d'})
return token
}catch(error){throw error}
}


static async createOne(newUser){

 
    try{

        const userCreated = await userModel.create(newUser)
        return userCreated
    }catch(error){throw error}
}

static async getUser(email){

       
    try{
        
        const getUsers = await userModel.findOne({where: {email}})
    return  getUsers
    }catch(error){throw error}
}


}


module.exports =authServices