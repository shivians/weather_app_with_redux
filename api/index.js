const express = require("express");
require('dotenv').config();
const app = express();
const port = 4000;
const cors = require("cors");
require("./db/connect");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

//import routes
const userRoutes = require("./routes/user");
const { urlencoded } = require("express");
//use routes
app.use("/api", userRoutes);

//initialize server
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
