var express = require('express');
var app = express();
var sql = require("mssql");
var bodyParser = require('body-parser');
var multer = require('multer');

//Define CONST.
PORT = "8000";
FILEDESTINATION = "uploads/images/avatars";
IMAGEURL = "/images/avatars";

//test commit từ remote


//Use library
app.use(bodyParser.json()); // Khai báo app sẽ sử dụng bodyParser chuyển data về dạng json
app.use(IMAGEURL,express.static(FILEDESTINATION));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



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

    if(err){
            console.log(err);
    }else{
        console.log("Connect to database succesfully !");
    }
});
var request = new sql.Request();
request.headers = {'Content-Type': 'application/json; charset=utf-8'};



//Multer: file upload
//Define where file is stored
//Define how the file would be named.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, FILEDESTINATION)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('image/')[1])
    }
  })
   
var upload = multer({ storage: storage })




//Start listening port
var server = app.listen(PORT, function () {
    console.log('Server is running..');
});



/*===================================================END CONFIG==================================================*/



//Upload image.
app.post('/upload', upload.single('photo'), (req, res) => {
    if(req.file) {
        var imageUrl = req.protocol + '://' + req.get('host') + req.baseUrl + IMAGEURL + "/" + req.file.filename;
        req.file.path = imageUrl;
        res.json(req.file);
    }
    else throw 'error';
});





//Main page
app.get('/',(req,res) =>{
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write("<h1> Welcome to my API ! </h1>");  
    
    res.end();
});




//Get candidate
//params: page,offset (optional)
app.get('/candidates', (req, res) => {

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
app.get('/candidates/search', (req, res) => {
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
app.get('/candidates/apply', (req, res) => {
    let cand = req.query;

    var query = "select J.ID as ID,J.Name as Name" 
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

            res.send(rows.recordset[0]); 
            res.end();
        }
    });
});




//Insert candidate
//params: Candidate
app.post('/candidates/add', (req, res) => {
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
app.post('/candidates/update', (req, res) => {

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
app.delete('/candidates/delete/:id', (req, res) => {

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




//Count number of candidates
app.get('/candidates/count',(req,res) =>{
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


// Get Candidate Action
app.get('/candidates/action', (req, res) => {
    let cand = req.query;

    var query = `select Action `
    +           `from PositionApply `
    +           `where CandidateID = ${cand.ID} `

    request.query(query, (error, rows, fields) => {
        if (error) {
            res.write("" + error);
            res.write("\nQuery: " + query);
            res.end();
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(rows.recordset[0]); 
            res.end();
        }
    });
});



// GetJob list
app.get('/jobs', (req, res) => {
    let cand = req.query;

    var query = `Select * from job`;

    request.query(query, (error, rows, fields) => {
        if (error) {
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

// Get JobLevel list
app.get('/levels', (req, res) => {
    let cand = req.query;

    var query = `Select * from JobLevel`;

    request.query(query, (error, rows, fields) => {
        if (error) {
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

//Add Candidate's Job Apply
//params: CandididateID, JobID
app.post('/jobs/apply/add', (req, res) => {
    let cand = req.body;

    var query = `Insert into PositionApply(CandidateID,JobID,Action) ` 
            +   `values(${cand.CandidateID},${cand.JobID},'${cand.Action}') `
            +   `SELECT @@IDENTITY as ID`;

        request.query(query, (error, rows, fields) => {
            if (error) {
                res.write("" + error);
                res.write("\nQuery: " + query);
                res.end();
            }
            else {
                res.header("Access-Control-Allow-Origin", "*");
                res.send(rows.recordset[0]); 
                res.end();
            }
        });
});



app.post('/jobs/apply/update', (req, res) => {

    let cand = req.body;

    var query = `Update PositionApply `
        +       `Set JobID = ${cand.PositionApply.ID} `
        +       `Where CandidateID = ${cand.ID} `;
    
    if(cand.Action){
        query = `Update PositionApply `
        +       `Set JobID = ${cand.PositionApply.ID}, `
        +       `Action = '${cand.Action}' `
        +       `Where CandidateID = ${cand.ID} `;
    }


    request.query(query, (error, rows, fields) => {
        if (error) {
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



app.post('/jobs/apply/deleteall', (req, res) => {

    let cand = req.body;


    var query = `Delete PositionApply where CandidateID = ${cand.ID}`;

    request.query(query, (error, rows, fields) => {
        if (error) {
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




// Get Interviewing list
app.get('/interviewings', (req, res) => {
    let cand = req.query;

    var query = `Select i.ID as InterviewingID, i.Result,i.Date,i.InterviewerName,i.Note,P.CandidateID,i.PositionApplyID,i.Location,i.DeleteFlag `
        +       `from Interviewing i, PositionApply p, Candidate c `
        +       `where 1 = 1 `
        +       `And i.PositionApplyID = p.ID `
        +       `And p.CandidateID = c.ID`;

    request.query(query, (error, rows, fields) => {
        if (error) {
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


//Add new Interviewing.
app.post('/interviewings/add', (req, res) => {

    let job = req.body;


    var query = `Insert into Interviewing(Result, Note, PositionApplyID, Date, InterviewerName, Location,DeleteFlag) `
    +           `values('Pending','Updating...',${job.PositionApplyID},getdate(),'Updating...','Updating...','N') `

    request.query(query, (error, rows, fields) => {
        if (error) {
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

//Update Interviewing.
app.post('/interviewings/update', (req, res) => {

    let job = req.body;


    var query = `Update Interviewing `
    +           `Set InterviewerName = N'${job.InterviewerName}', `
    +           `Location = N'${job.Location}', `
    +           `Date = '${job.Date}', `
    +           `Note = N'${job.Note}', `
    +           `DeleteFlag = '${job.DeleteFlag}', `
    +           `Result = '${job.Result}' `
    +           `Where ID = ${job.InterviewingID} `

    request.query(query, (error, rows, fields) => {
        if (error) {
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







// Get Offerings list
app.get('/offerings', (req, res) => {
    let cand = req.query;

    var query = `Select o.ID as OfferingID,o.CurrentSalary,o.ExpectSalary,o.OfferingSalary,o.LevelOffered,o.Result,o.Note,P.CandidateID,o.PositionApplyID,o.DeleteFlag ` 
    +           `From Offering o, PositionApply p, Candidate c `
    +           `Where 1 = 1 `
    +           `And o.PositionApplyID = p.ID `
    +           `And p.CandidateID = c.ID `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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


//Add new Offering.
app.post('/offerings/add', (req, res) => {

    let job = req.body;


    var query = `Insert into Offering(PositionApplyID,CurrentSalary,ExpectSalary,OfferingSalary,LevelOffered,Result,Note,DeleteFlag) `
    +           `Values(${job.PositionApplyID},${job.CurrentSalary},${job.ExpectSalary},${job.OfferingSalary},N'${job.LevelOffered}',N'Pending',N' ','N') `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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



//Update Offering.
app.post('/offerings/update', (req, res) => {

    let job = req.body;


    var query = `Update Offering `
    +           `Set CurrentSalary = ${job.CurrentSalary}, `
    +           `ExpectSalary = ${job.ExpectSalary}, `
    +           `OfferingSalary = ${job.OfferingSalary}, `
    +           `LevelOffered = '${job.LevelOffered}', `
    +           `Result = '${job.Result}', `
    +           `Note = N'${job.Note}', `
    +           `DeleteFlag = '${job.DeleteFlag}' `
    +           `Where ID = ${job.OfferingID} `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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






// Get Offerings list
app.get('/probations', (req, res) => {
    let cand = req.query;

    var query = `Select Pro.ID as ProbationID,Pro.StartDate,Pro.EndDate,Pro.ProbationSalary,Pro.ContractedSalary,J.Name as Level,Pro.Result,Pro.Note,P.CandidateID,Pro.PositionApplyID,Pro.DeleteFlag `
    +           `From Probation Pro, JobLevel J, PositionApply p `
    +           `Where 1 = 1 `
    +           `And Pro.PositionApplyID = p.ID `
    +           `And Pro.Level = J.ID `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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


//Add new Probation.
app.post('/probations/add', (req, res) => {

    let prob = req.body;


    var query = `Insert into Probation(PositionApplyID,StartDate,EndDate,ProbationSalary,ContractedSalary,Note,Level,Result,DeleteFlag) `
    +           `Values(${prob.PositionApplyID},'${prob.StartDate}','${prob.EndDate}',${prob.ProbationSalary},${prob.ContractedSalary},N'',${prob.Level},'Pending','N') `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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



//Update Probation
app.post('/probations/update', (req, res) => {

    let prob = req.body;


    var query = `Update Probation `
    +           `Set StartDate = '${prob.StartDate}', `
    +           `EndDate = '${prob.EndDate}', `
    +           `ProbationSalary = ${prob.ProbationSalary}, `
    +           `ContractedSalary = ${prob.ContractedSalary}, `
    +           `Level = ${prob.Level}, `
    +           `Result = '${prob.Result}', `
    +           `Note = N'${prob.Note}', `
    +           `DeleteFlag = '${prob.DeleteFlag}' `
    +           `Where ID = ${prob.ProbationID} `;

    request.query(query, (error, rows, fields) => {
        if (error) {
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