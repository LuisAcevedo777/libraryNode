const loanServices = require("../services/loan.service");

const loanBookController = async (req, res, next) => {
  try {
    const newLoan = req.body;
    const loanCreated = await loanServices.createOne(newLoan);
    res.status(201).send(loanCreated);
  } catch (error) {
    next(error);
  }
};

const returnBookController = async (req, res, next) => {
  try {
    const { loanId } = req.params;
    const loanToUpdate = req.body;
    const loanUpdated = await loanServices.updateOne(loanId, loanToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loanBookController,
  returnBookController,
};
