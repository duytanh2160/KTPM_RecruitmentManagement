var express = require('express');
var app = express.Router();
module.exports = app;
var bodyParser = require('body-parser');
var db = require('./db.js');
var request = db.connection();
//Define CONST.
PORT = "8000";
FILEDESTINATION = "uploads/images/avatars";
IMAGEURL = "/images/avatars";



//Use library
app.use(bodyParser.json()); // Khai báo app sẽ sử dụng bodyParser chuyển data về dạng json





//Get candidate
//params: page,offset (optional)
app.get('/', (req, res) => {

    var query = "SELECT * from Candidate order by ID";
    var offset = 6;


    if(req.query.offset != ""){
        offset = req.query.offset;
    }
    if(req.query.page != ""){
        query = "SELECT * from Candidate order by ID OFFSET ((" + req.query.page + " - 1)*6) ROWS FETCH NEXT "+ offset +" ROWS ONLY";
    }

    request.query(query, (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows.recordset); 
            res.end();
        }
    });
});



//Search candidate, can be used as GetAll
//params: searchStr,searchCol (optional)
app.get('/search', (req, res) => {
    let cand = req.query;
    if(cand.searchCol == undefined){
        cand.searchCol = "Fullname";
    }
    if(cand.searchStr == undefined){
        cand.searchStr = "";
    }


    var query = `SELECT C.ID,Fullname,Sex,BirthDay,PhoneNumber,IdentifyNumber,Address,Email,Image,Skills,Experience,University,Source, J.Name as Level,DeleteFlag as DeleteFlag,Note` 
             +` From Candidate C, JobLevel J`
             +` Where 1 = 1`
             +` AND C.LevelApply = J.ID`
             +` And ${cand.searchCol} like N'%${cand.searchStr}%' `;

    request.query(query, (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.write("\nQuery: " + query);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows.recordset); 
            res.end();
        }
    });
});


// Get Candidate's position apply
// params: ID
app.get('/apply', (req, res) => {
    let cand = req.query;

    var query = "select J.Name" 
              +" from Candidate C, Job J, PositionApply P" 
              +" Where P.CandidateID = C.ID and P.JobID = J.ID"
              +" And C.ID = " + cand.ID;

    request.query(query, (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.write("\nQuery: " + query);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");

            var result = "";
            for(var i = 0 ; i < rows.recordset.length ; i++){
                result += rows.recordset[i].Name;
                if(i < (rows.recordset.length - 1)){
                    result += ",";
                }
                
            }

            res.send(JSON.stringify(result)); 
            res.end();
        }
    });
});




//Insert candidate
//params: Candidate
app.post('/add', (req, res) => {
    let cand = req.body;


    var query1 = `INSERT INTO Candidate(Fullname,Sex,BirthDay,Address,Email,Image,PhoneNumber,IdentifyNumber,Skills,Experience,University,Source,DeleteFlag,LevelApply,Note)` + 
                 `values(N'${cand.Fullname}','${cand.Sex}','${cand.BirthDay}',N'${cand.Address}','${cand.Email}','${cand.Image}',
                 '${cand.PhoneNumber}','${cand.IdentifyNumber}',N'${cand.Skills}',N'${cand.Experience}',N'${cand.University}',N'${cand.Source}','N',${cand.Level},N'${cand.Note}')` + 
                 ` SELECT @@IDENTITY as ID`;


    request.query(query1, (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.write("\nQuery: " + query1);
            res.end();
        }
        else {
            res.send(rows.recordset[0]); 
            res.end();
        }
    });
});





//Update candidate
//params: Candidate
app.post('/update', (req, res) => {

    let cand = req.body;


    var query = `UPDATE Candidate`
            +   ` Set Fullname = N'${cand.Fullname}',Sex = '${cand.Sex}',BirthDay='${cand.BirthDay}',Address=N'${cand.Address}'`
            +   `,Email='${cand.Email}',LevelApply=${cand.Level},PhoneNumber='${cand.PhoneNumber}',IdentifyNumber='${cand.IdentifyNumber}'`
            +   `,Skills = N'${cand.Skills}',Experience=N'${cand.Experience}',University=N'${cand.University}',Source=N'${cand.Source}',DeleteFlag='${cand.DeleteFlag}'`
            +   `,Note = N'${cand.Note}', Image='${cand.Image}'`
            +   ` Where ID = ${cand.ID}`;

    request.query(query, (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.write("\nQuery: " + query);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(`{"result":"Successful"}`); 
            res.end();
        }
    });
});




//Physical delete candidate
//params: id
app.delete('/delete/:id', (req, res) => {

    request.input("id",req.params.id);

    request.query('DELETE FROM Candidate where ID = @id', (error, rows, fields) => {
        if (error) {
            //console.log(error);
            res.write("" + error);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(`{"result":"Successful"}`); 
            res.end();
        }
    });
});




//Count number of 
app.get('/count',(req,res) =>{
    request.query('select count(ID) as Count from candidate',(error, rows, fields) => {
        if (error) {
            res.write("" + error);
            res.end();
        }
        else {
            res.send(rows.recordset); 
            res.end();
        }
    });
});
