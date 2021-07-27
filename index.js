const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {name: 'Walid nurudin'});
});

mongoose.connect('mongodb://127.0.0.1:27017/arkademy', { useNewUrlParser: true, useUnifiedTopology: true })
    // jika connect ke db, maka app berjalan
    .then(result => app.listen(port, () => console.log(`port berjalan di http://localhost:${port}`)))
    .catch(err => console.log(err))
