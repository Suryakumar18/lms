// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'1234',
//     database:"course"
// })

// app.get('/',(req, res)=>{
//     // const sqlInsert = "insert into course (courseid, coursename, courseimage, coursedescription, courseduration) values ('0405','PHP FullStack Development','','Course coverd dotnet','4 months')";
//     // db.query(sqlInsert, (err, result)=>{
//     //     console.log("error", err);
//     //     console.log("result", result);
//     //     res.send("Inserted Successfully");
//     // });
// });

// app.post("/api/post", (req, res) =>{
//     const {courseid, coursename, courseimage, coursedescription} = req.body;
//     const sqlInsert = "insert into addcourse (courseid, name, image, discription) values (?, ?, ?, ?)";
//     db.query(sqlInsert, [courseid, coursename, courseimage, coursedescription], (error, result)=>{
//         if(error){
//             console.log(error);
//         }
//         res.send("insert Successfully")
//     });
// });

// app.listen(8081, ()=>{
//     console.log("listening...");
// })