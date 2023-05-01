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

app.get("/", (req, res) => {
  res.send("Hi, This is rest api for jobs ");
});

// middleware to set router
app.use("/api", routes);

//db connection
const connect = async () => {
  try {
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => {
      console.log(`our app is connected on ${port}}`);
    });
  } catch (error) {
    console.log("Error connecting to Database :", error);
  }
};

connect();
