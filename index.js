const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"1234",
    database:'course'
})


app.get('/',(req,res)=>{
    res.json('backend')
})

app.get('/books',(req,res)=>{
    const q = "SELECT * FROM newcourse1";
    db.query(q,(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})


app.post('/books',(req,res)=>{
    const q = 'INSERT INTO newcourse1(`courseid`,`title`,`desc`,`cover`)VALUES(?)'
    const values = [
        req.body.courseid,
        req.body.title,
        req.body.desc,
        req.body.cover
    ]

    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json('data inserted succesfully')
    })
})



app.delete("/books/:id",(req,res)=>{
    const courseid = req.params.id;


    const q = "DELETE FROM newcourse1 WHERE id = ?";


    db.query(q,[courseid],(err,data)=>{
        if(err){
            console.log(err)
        }
        return res.json('deleted successfully')
    })
})



app.put("/books/:id",(req,res)=>{
    const courseid = req.params.id
  

    const q = "UPDATE newcourse1 SET `courseid`=?,`title`=?,`desc`=?,`cover`=? WHERE id =?";

    const values = [
        req.body.courseid,
        req.body.title,
        req.body.desc,
        req.body.cover
    ] 
    db.query(q,[...values,courseid],(err,data)=>{
        if(err){
            console.log(err)
        }
        return res.json('updated successfully')
    })
})





//ADD MODULES SERVER CODE
app.get('/getmodules/:courseid',(req,res)=>{
    const courseid = req.params.courseid;
    
    const q = "select *from module  where courseid in(select courseid from newcourse1 where courseid=?)";
    db.query(q,[courseid],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})



app.post('/insertmodules',(req,res)=>{
 


    const q = 'INSERT INTO module(`courseid`,`moduleid`,`name`,`desc`,`cover`)VALUES(?)';
    
    const values = [
        req.body.courseid,
        req.body.moduleid,
        req.body.name,
        req.body.desc,
        req.body.cover
    ]

    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json('module data inserted succesfully')
    })
})




app.put("/moduleupdate/:courseid/:moduleid",(req,res)=>{

 const courseid = req.params.courseid
 const moduleid = req.params.moduleid

 console.log(courseid)
 console.log(moduleid)


  
  

    const q = "UPDATE module SET `courseid`=?,`moduleid`=?,`name`=?,`desc`=?,`cover`=? WHERE moduleid =?";

    const values = [
        req.body.courseid,
        req.body.moduleid,
        req.body.modulename,
        req.body.desc,
        req.body.cover
    ] 
    db.query(q,[...values,moduleid],(err,data)=>{
        if(err){
            console.log(err)
        }
        return res.json('updated successfully')
    })
})




app.delete("/deletemodule/:moduleid",(req,res)=>{
    const moduleid = req.params.moduleid;


    const q = "DELETE FROM module WHERE moduleid = ?";


    db.query(q,[moduleid],(err,data)=>{
        if(err){
            console.log(err)
        }
        return res.json('deleted successfully')
    })
})

//get module edit form details

app.get('/getsomemodules/:moduleid',(req,res)=>{
    const moduleid = req.params.moduleid;
    
    const q = "select *from module where moduleid=?";
    db.query(q,[moduleid],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})




//topics operation

app.get('/addnewtopics/:moduleid',(req,res)=>{
    const moduleid = req.params.moduleid;
    
    const q = "select *from topics where moduleid=?";
    db.query(q,[moduleid],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})





app.post('/addtopic',(req,res)=>{
    const q = 'INSERT INTO topics(`moduleid`,`topicname`,`desc`,`video`,`pdf`)VALUES(?)'
    const values = [
        
        req.body.moduleid,
        req.body.topicname,
        req.body.desc,
        req.body.video,
        req.body.pdf
    ]

    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json('data inserted succesfully')
    })
})








app.put("/updatetopics/:moduleid/:topicid",(req,res)=>{

   
    const topicid = req.params.topicid
    const moduleid = req.params.moduleid
    console.log(topicid)
   
   
   
     
     
   
       const q = "UPDATE topics SET  `moduleid`=?,`topicname`=?,`desc`=?,`video`=?,`pdf`=? WHERE topicid =?";
   
       const values = [
            
           req.body.moduleid,
           req.body.topicname,
           req.body.desc,
           req.body.video,
           req.body.pdf
       ] 
       db.query(q,[...values,topicid],(err,data)=>{
           if(err){
               console.log(err)
           }
           return res.json('updated successfully')
       })
   })




   app.delete("/deletetopics/:topicid",(req,res)=>{
    const topicid = req.params.topicid;


    const q = "DELETE FROM topics WHERE topicid = ?";


    db.query(q,[topicid],(err,data)=>{
        if(err){
            console.log(err)
        }
        return res.json('deleted successfully')
    })
})




//students page view codes

app.get('/coursetopic/:moduleid',(req,res)=>{
    const moduleid = req.params.moduleid;
    
    const q = "select *from topics where moduleid=?";
    db.query(q,[moduleid],(err,data)=>{
        if(err){
            return res.json(err)
        }
        return res.json(data)
    })
})









app.listen(8800,()=>{
    console.log('connected backend')
})