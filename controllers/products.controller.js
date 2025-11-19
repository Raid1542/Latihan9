const Produk = require('../models/products.model');

exports.getAllProducts = (req, res) => {
    Produk.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    Produk.getById(req.params.id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
        res.json(results[0]);
    });
};

exports.createProduct = (req, res) => {
    Produk.create(req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};

exports.updateProduct = (req, res) => {
    Produk.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
        res.json({ message: 'Produk berhasil diupdate' });
    });
};

exports.deleteProduct = (req, res) => {
    Produk.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
        res.json({ message: 'Produk berhasil dihapus' });
    });
};