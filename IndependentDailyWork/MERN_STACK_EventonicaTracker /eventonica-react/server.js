const express = require("express");
const cors = require("cors"); //middleware
const mongoose = require("mongoose");

require("dotenv").config();

//console.log(process.env);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Connecting to Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const eventsRouter = require("./routes/events");
const usersRouter = require("./routes/users");

app.use("/events", eventsRouter);
app.use("/users", usersRouter);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, "client/build")));
  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

//connecting to Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
