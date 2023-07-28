const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT ||8080

app.use("/",(req,res)=>{
  res.send("This is live ");
});


app.listen( 5000, () => {
  console.log(`App running on port ${PORT}`);
})

