// Creating server using ExpressJs

const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/hotelmenu', (req, res) => {
  res.send('Hello, give me menu card!')
})


app.get('/idli', (req, res) => {
  var customized_idli = {
    name : "Rava-idli",
    quantity: 10,
    is_Sambhar: true,
    ist_chutney: false
  };
    res.send(customized_idli)
})

app.get('/hotelvegmenu', (req, res) => {
  res.send('Hello, give me menu card. I am vegeterian!')
})

app.listen(3000);