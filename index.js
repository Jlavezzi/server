require("dotenv").config();
const express = require("express"),
     PORT = process.env.PORT||3500,
     app = express(),
     bodyParser = require("body-parser"),
     connect = require("./utils/DBconnect"),
     errorHandler = require("./Middleware/errorHandler");


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use( "",require("./routes/route")); 


//error handler ('still working on this')
app.use( errorHandler , require('./Middleware/errorHandler'));





app.listen(PORT, () => {
  console.log(`connected to ${PORT}`);
  connect();
});
