const express = require("express");
const cors = require("cors");
const logger = require('./middlewares/logger.js')
const bodyParser = require("body-parser");
const planRouter = require("./routes/plan-router.js");

const port = 8083;
const app = express();

app.use([cors(), express.json(), logger]);
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/plan", planRouter);

//activate somthing like that when need to deploy
//app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('/', (req, res) => {
  res.status(200).json({
      status: 'OK'
  })
})

app.listen(port || process.env.PORT, () => {
  console.log(`Server is Running on Port: http://localhost:${port || process.env.PORT}`);
});
