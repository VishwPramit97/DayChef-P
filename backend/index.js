const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectiveId;


var client=new MongoClient('mongodb://localhost:27017/frontend1',{useNewUrlParser:true});
// var client = new MongoClient("mongodb+srv://cluster0-8trwh.mongodb.net", {useNewUrlParser:true})

var connection;
client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("database is connected successfully");
    }
    else
    {
       console.log("database could not connected");
    }
})

const app = express(); //use,listen ,get,delete/post (these are the method expree)
app.use(cors());
app.get('/', (req, res)=>{    //(req=request and res= result)
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
   console.log(req.body);
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
app.post('/reg',bodyParser.json(),(req,res)=>{

    var collection = connection.db('frontend1').collection('employee');
    collection.find({email:req.body.email}).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"failed", data:"email already exits"})   
        }
        else{
         
            collection.insert(req.body, (err,result)=>{
                if(!err)
                {
                    res.send({status:"ok", data:"register success"});
                }
                else{
                    res.send({status:"failed", data:err});
                }
            
            })
        
        }
    })
    
})
app.post('/confirm',bodyParser.json(),(req,res)=>{

    var collection = connection.db('frontend1').collection('booking');
       
            collection.insert(req.body, (err,result)=>{
                if(!err)
                {
                    res.send({status:"ok", data:"booking success"});
                }
                else{
                    res.send({status:"failed", data:err});
                }
            
            })
        
    

    
})


   app.listen(3000, ()=>{console.log("server is listning on port 3000")});