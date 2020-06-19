const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectiveId;


var client=new MongoClient( 'mongodb://localhost:27017/frontend1',{useNewUrlParser:true});
var connection;
client.connect((err,con)=>{
    if(!err)
    {
        connection = con;
        console.log("database is connected successfully");
    }
    else
    {
       console.log("database could not connected");
    }
})

const app = express();
app.users(cors());

app.get('/', (req, res)=>{
  res.send({status:"ok",data:"this is a test api"});
})




app.get('/user', (req,res)=>{
    var id=req.query.id;
    res.send({status:"ok",data:[{name:"x", age:78,id:id},{name:yield,age:67}]});
})


app.post('/sign-in',bodyParser.json(),(req,res)=>{
     var collection = connection.db('frontend1').collection('users');
     collection.find(req.body).toArray((err,docs)=>{
         if(!err && docs.length>0)
         {
             res.send({status:"ok", data:docs});
         }
         else{
             res.send({status:"failed", data:err});
         }
     })
})




app.post('/sign-up',bodyParser.json(),(req,res)=>{
    var collection = connection.db('frontend1').collection('users');

   

    collection.find({email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"failed", data:"email already exits"})   
        }
        else{
         
            collection.insert(req.body, (err,result)=>{
                if(!err)
                {
                    res.send({status:"ok", data:"signup success"});
                }
                else{
                    res.send({status:"failed", data:err});
                }
            
            })
        
        }
    })
    
})

   app.listen(3000, ()=>{console.log("server is listning on port 3000")});