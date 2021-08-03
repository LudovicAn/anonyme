// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const { getCars, getCar } = require("./database/cars");
const { getUser } = require("./database/users");
const { getComments } = require("./database/comments");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

app.use(bodyParser.json());
app.use(upload.array());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/cars", async (req, res) => {
  res.send(await getCars());
});

// defining an endpoint to return all ads
app.post("/car", async (req, res) => {
  let { id } = req.body;

  let car = await getCar(id);
  res.send(car);
});

app.post("/user", async (req, res) => {
  let { name } = req.body;

  let user = await getUser(name);

  res.send(user);
});

app.post("/comment", async (req, res) => {
  let { id } = req.body;

  let comment = await getComments(id);
  //   getComments(id);
  res.send(comment); // echo the result back
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
