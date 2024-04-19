const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const cors = require('cors');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.use(cors());

router.get('/', (req, res) => {
  res.send('<h1>Halaman Utama</h1>');
});

router.get('/about', (req, res) => {
  res.send('<h1>Tentang Kami</h1>');
});

router.get('/contact', (req, res) => {
  res.send('<h1>Hubungi Kami</h1>');
});

router.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/product.html'));
});

router.post('/product', upload.single('productImage'), (req, res) => {
    const { productName, productPrice, productStock } = req.body;
    const file = req.file;

    res.json({
        message: "Produk ditambahkan",
        data: {
            nama: productName,
            harga: productPrice,
            stok: productStock,
            gambar: `/uploads/${file.filename}`
        }
    });
});

module.exports = router;
