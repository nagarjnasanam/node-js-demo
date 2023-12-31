const express = require("express");
const bp = require("body-parser");
const cors = require("cors");



const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));



const port = process.env.PORT || 3001;
app.get('/hi',(req,res)=>{
  console.log(req)
  res.send("hi")
})
app.listen(port, '0.0.0.0',() => {
  console.log("Server Running at http://localhost:3000/");
});
// User Register API


module.exports = app;