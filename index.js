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
    "success": {
      "total": 1
    },
    "contents": {
      "welcome": "You are",
      "name": req.query.name || "name missing",
      "result": "yes"
    }
  })
});

app.listen(3000, () => {
  console.log('Server Started');
});