const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("../utils/db");
const initModel = require("../models/init.model");
const authRouter = require("../routes/auth.route");
const bookRouter = require("../routes/book.route");
const loanRouter = require("../routes/loan.route");
const payRouter = require("../routes/payment.route");
const errorRouter = require("../routes/errorHandler.route");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../../swagger.json");

require("dotenv").config();

initModel();
db.authenticate()
  .then((res) => {
    console.log("db authenticated");
  })
  .catch((error) => {
    console.log(error);
  });

  db.sync()
  .then((res)=>{

    console.log('db syncronized')
  })
  .catch((error)=>{
    console.log(error)
  })

const PORT = process.env.PORT;

const app = express();

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bookRouter);
app.use(loanRouter);
app.use(authRouter);
app.use(payRouter);
app.use(express.static(path.join(__dirname, "../public")));
errorRouter(app);

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
});

module.exports = app;
