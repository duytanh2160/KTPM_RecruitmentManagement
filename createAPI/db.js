var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql'); // Khai báo module mysql

app.use(bodyParser.json()); // Khai báo app sẽ sử dụng bodyParser chuyển data về dạng json

// Connect database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Namhuy@2152971',
    database: 'db_user',
    // multipleStatements : true
});

// Kiểm tra connection
connection.connect((error) => {
    if (error) {
        console.log('DB connection failed \n Error : ' + JSON.stringify(error));
    }
    else {
        console.log('Connect to DB successfully...');
    }
});

app.listen(8000, () => {
    console.log('Server is running at port 8000...');
    console.log('(NodeJS xử lý dữ liệu dạng bất đồng bộ nên server xong trước sẽ chạy trước DB mặc dù DB để trước server)');
});

// GET ALL USERS
app.get('/users', (req, res) => {
    // rows : các dòng data sẽ hiển thị
    connection.query('SELECT id, name, salary FROM userinfo', (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            // console.log(rows); // Hiển thị data ở dưới màn hình console
            res.send(rows); // send() : hiển thị data trên web
            res.end();
        }
    });
});

// GET USER BY ID
// id này sẽ được truyền vào req.params.id
app.get('/users/:id', (req, res) => {
    connection.query('SELECT id, name, salary FROM userinfo WHERE id = ?', [req.params.id], (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send(rows);
            res.end();
        }
    });
});

// ADD USER
app.get('/add', (req, res) => {
    let user = req.body; // user = req.body sẽ chứa các giá trị khi user nhập vào, lúc lấy ra chỉ cần user.value
    var sql = "INSERT INTO userinfo (id, name, salary) VALUES ('" + user.id + "', '" + user.name + "', '" + user.salary + "')";

    connection.query(sql, (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send('Add user successfully');
            res.end();
        }
    });
});

// DELETE USER
app.delete('/delete/:id', (req, res) => {
    connection.query('DELETE FROM userinfo WHERE id = ?', [req.params.id], (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send('Deleted user successfully');
            res.end();
        }
    });
});

// UPDATE USER
app.put('/update/:id', (req, res) => {
    let user = req.body; // user = req.body sẽ chứa các giá trị khi user nhập vào, lúc lấy ra chỉ cần user.value
    var sql = "UPDATE userinfo SET name = '" + user.name + "', salary = '" + user.salary + "' WHERE id = '" + user.id + "'";

    connection.query(sql, (error, rows, fields) => {
        if (error) {
            console.log(error);
        }
        else {
            res.send('Update user successfully');
            res.end();
        }
    });
});