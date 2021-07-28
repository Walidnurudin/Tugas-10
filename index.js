const express = require("express");
const mongoose = require("mongoose");
var methodOverride = require('method-override')
const Produk = require("./models/produk");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

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
        res.redirect("/");
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
        console.log({ message: "Success create", data: produk })
        res.redirect("/");
    } catch (error) {
        console.log(error)
        res.redirect("/");
    }
})

app.put('/update', async (req, res) => {
    const { id, nama_produk, keterangan, harga, jumlah } = req.body;
    try {
        let produk = await Produk.updateOne({ _id: id }, {
            nama_produk,
            keterangan,
            harga,
            jumlah
        });
        console.log({ message: "Success update", data: produk })
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
})

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let produk = await Produk.deleteOne({ _id: id });
        console.log({ message: "Success update", data: produk })
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/arkademy', { useNewUrlParser: true, useUnifiedTopology: true })
    // jika connect ke db, maka app berjalan
    .then(result => app.listen(port, () => console.log(`port berjalan di http://localhost:${port}`)))
    .catch(err => console.log(err))
