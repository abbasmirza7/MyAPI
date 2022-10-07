const express = require('express');

var cors = require('cors')
var app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("Abbas Mirza: Server Working")
})

app.get('/democall.json', (req, res) => {
  console.log(req.query.name)
  res.json({
    "Success": {
      "Total": 1
    },
    "Contents": {
      "Your Name": req.query.name || "Name Missing",
      "Result": "Server Call Successful"
    }
  })
});

app.listen(3000, () => {
  console.log('Server Started');
});