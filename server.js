require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/jobRoutes");

const port = process.env.PORT;
const db_uri = process.env.DB_URI;

const app = express(); // middleware

app.use(cors());
app.use(express.json());
app.use("/api", routes);

//db connection
async function connect() {
  try {
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database!");
  } catch (error) {
    console.log("Error connecting to Database :", error);
  }
}

connect();

app.listen(port, () => {
  console.log(`our app is listening on ${port}}`);
});
