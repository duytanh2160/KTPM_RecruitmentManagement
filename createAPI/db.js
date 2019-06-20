var sql = require("mssql");
module.exports.connection = () => {
    //config for your database
    //more info: https://www.npmjs.com/package/mssql
    var config = {
        user: 'qlnhanvienktpm',
        password: 'project.ktpm',
        server: 'den1.mssql8.gear.host',
        database: 'qlnhanvienktpm',
    };

    // connect to your database
    sql.connect(config, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Connect to database succesfully !");
        }
    });
    var request = new sql.Request();
    request.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    return request;
}


