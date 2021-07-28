const mongoose = require("mongoose");

const produkSchema = new mongoose.Schema({
    nama_produk: {
        type: String,
        required: true
    },
    keterangan: {
        type: String,
    },
    harga: {
        type: Number,
        required: true,
    },
    jumlah: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Produk', produkSchema);