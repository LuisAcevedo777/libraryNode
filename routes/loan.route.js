const {Router} = require('express')
const {loanBookController, returnBookController}= require('../controllers/loan.controller')


const loanRouter = Router()

loanRouter.post('/api/loans/:userId/:bookId', loanBookController)

loanRouter.put('/api/loans/:userId/:bookId', returnBookController)


module.exports = loanRouter