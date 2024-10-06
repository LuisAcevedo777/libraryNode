const loanServices = require('../services/loan.service')



const loanBookController = async(req,res,next)=>{
    try{
        const newLoan = req.body
        const loanCreated = await loanServices.createOne(newLoan)
        res.status(201).send(loanCreated)
    }catch(error){next(error)}}



const returnBookController =async(req,res,next)=>{
    
    try{
        
        const {id} = req.params
        const loanToUpdate = req.body
        const loanUpdated = await loanServices.updateOne(id,loanToUpdate)
        res.status(204).send()
    }catch(error){next(error)}}




module.exports = {


    loanBookController,
    returnBookController}