const {
       BaseError,
       DataBaseError,
       InvalidConnectionError,
       ConnectionAcquireTimeoutError,
       ConnectionError,
       ConnectionReffusedTimeoutError
 

} = require('sequelize')



const logError = (error,req,res,next)=>{

    console.log(error)
    next()
}

const errorHandler =(error,req,res,next)=>{

    const {status} = error
    try {
        
   return res.status(status||500).json({errors: error.array()})

    } catch (error) {
        throw error
    }
}



const orm = (error,req,res,next)=>{

if(
  error instanceof BaseError ||
  error instanceof DataBaseError ||
  error instanceof InvalidConnectionError 

){return res.status(500).json({errors: error.array()})}
else if(
 
    error instanceof ConnectionAcquireTimeoutError ||
    error instanceof ConnectionReffusedTimeoutError ||
    error instanceof ConnectionError

){return res.status(409).json({errors: error.array()})}
}



module.exports = {

    logError,
    orm,
    errorHandler
    
}