const db = require('./db.config');

const Produk = {
    getAll: (callback) => {
        db.query('SELECT * FROM produk', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM produk WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO produk SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE produk SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM produk WHERE id = ?', [id], callback);
    }
};

module.exports = Produk;