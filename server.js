//import
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

//import config.env file
dotenv.config({ path: "./config/config.env" });

//Here we can call function from db.js class
connectDB();

//import router file
const transactions = require("./routes/transactions");

//init
const app = express();

//So we send data from a client its gone a come in

//req.body.text or req.body.amount or any field

//but in order to use req.body so add the body part to middle ware
//in our server.js file so go to server.js file add this line
//right under there we create the app variable

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//get request
//app.get('/', (req, res) => res.send('Hello World from Express'));

//now we get this code from router
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", index.html))
  );
}

const PORT = process.env.PORT || 5000;

//to run this server we have to listen our server
//app.listen();

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
