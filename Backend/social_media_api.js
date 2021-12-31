const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'media_social'
});
//membuat data
app.post('/posts', (req, res) => {
    let sql = "INSERT INTO posts SET post_date=NOW()"
        + ", username= '" + req.body.username
        + "', post= '" + req.body.post + "'";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Disimpan",
            "data": null
        });
    });
});

//menerima seluruh data
app.get('/posts', (req, res) => {
    let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM posts";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Diambil",
            "data": results
        });
    });
});

//menerima data berdasarkan post_id
app.get('/posts/id/:id', (req, res) => {
    let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM posts WHERE post_id='" + req.params.id + "'";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Diambil",
            "data": results
        });
    });
});

//menerima data berdasarkan username
app.get('/posts/username/:username', (req, res) => {
    let sql = "SELECT post_id, username, post, DATE_FORMAT(post_date, '%W %D %M %Y %H:%i') as post_date FROM posts WHERE username='" + req.params.username + "'";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Diambil",
            "data": results
        });
    });
});

//mengupdate data
app.put('/posts/id/:id', (req, res) => {
    let sql = "UPDATE posts SET post='" + req.body.post + "'" + "WHERE post_id='" + req.params.id + "'";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Diupdate",
            "data": null
        });
    });
});

//menghapus data
app.delete('/posts/id/:id', (req, res) => {
    let sql = "DELETE FROM posts WHERE post_id='" + req.params.id + "'";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({
            "status": 200,
            "message": "Data Berhasil Dihapus",
            "data": null
        });
    });
});

app.use('/images', express.static('images'));

app.listen(port, () => {
    console.log(`cli-node-api listening at http://localhost:${port}`)
});