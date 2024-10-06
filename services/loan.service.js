const loanModel = require('../models/loan.model')

class loanServices{

       
static async createOne(newLoan){

    
        try{
    
            const loanCreated = await loanModel.create(newLoan)
            return loanCreated
        }catch(error){throw error}
}



static async updateOne(id, loanToUpdate){

    
    
        try{
            
               const loanUpdated = await loanModel.update(loanToUpdate,{where:{loanId:id}})
            return loanUpdated
        }catch(error){throw error}
}


}


module.exports = loanServices