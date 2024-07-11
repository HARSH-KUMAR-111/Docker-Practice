const express = require("express");
const app = express();

app.get("/",(req, res)=>{
  res.json([
    {
      id:1,
      name:"Harsh",
      age:23
    },
    {
      id:2,
      name:"Ankit",
      age:22
    },
    {
      id:3,
      name:"Ashish",
      age:23
    },
  ])
});

app.listen(5000,()=>{
  console.log("App is running")
})