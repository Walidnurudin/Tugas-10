const express = require("express");
const mongoose = require("mongoose");
const Produk = require("./models/produk");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes & controllers
app.get('/', async (req, res) => {
    try {
        let produk = await Produk.find();
        res.render('index', {
            name: 'Walid nurudin',
            data: produk
        });
        console.log(produk)
    } catch (error) {
        console.log(error)
    }
});

app.post('/create', async (req, res) => {
    const { nama_produk, keterangan, harga, jumlah } = req.body;
    console.log(req.body)
    try {
        let produk = await Produk.create({
            nama_produk,
            keterangan,
            harga,
            jumlah
        });
        res.status(200).json({ message: "Success create", data: produk });
    } catch (error) {
        console.log(error)
    }
})

app.put('/update/:id', async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/arkademy', { useNewUrlParser: true, useUnifiedTopology: true })
    // jika connect ke db, maka app berjalan
    .then(result => app.listen(port, () => console.log(`port berjalan di http://localhost:${port}`)))
    .catch(err => console.log(err))
