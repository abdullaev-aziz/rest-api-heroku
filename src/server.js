//Setting up environment variables
require("dotenv").config();

//setting up express
const express = require("express");
const app = express();

//connecting to MongoDB
const mongoose = require("mongoose");
const { getMongoConnectURL } = require("./getMongoConnectURL");
const MONGO_CONNECT_URL='mongodb+srv://<user>:<password>@cluster0.knhl5.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PROD_MONGO_URL = getMongoConnectURL(
  MONGO_CONNECT_URL,
  process.env.DBUSER,
  process.env.DBPSW,
  process.env.DBNAME
);
mongoose.connect(PROD_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Successfully connected to db"));

//Middleware
//allowing requests with JSON as a body
app.use(express.json());

//importing & using routes
const routes = require("./routes/router");
app.use(routes);

//deal with cors issues
const cors = require("cors");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(cors);

//Listening to the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started"));

/**
 * Instead of using bodyParser, express.json was used
 */
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
