var express = require('express');
var app = express();
var cors = require('cors');
var date = new Date();
const mongoose = require('mongoose');

app.use(cors());+
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/citrus-food-services');

const searchSchema = new mongoose.Schema({
    query:String,
    freq:Number
});

const search = mongoose.model('search','searchShema');

let hour  = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let date_set = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();

if(hour>12){
    hour=hour-12;
}

let prop_date = "'"+date_set+" "+hour+":"+minute+":"+second+"'";

app.get('/',(req,res)=>{
    res.send("agaya lodu");
})

let data = '';

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM search_his",(err,result)=>{
        if(err) throw err;
        data = result;
    })
})    


app.post('/srch',(req,res)=>{
    let num = 1;
    if(req.body.srch.length!=0){
        let dat = `'${req.body.srch}'`
        for(i=0;i<data.length;i++){
            if(data[i].query==req.body.srch){
                console.log(data[i].query + "== "+ req.body.srch)
                num = data[i].num+1;
            }
        }
        var sql = `INSERT INTO search_his VALUES (${dat},${prop_date},${Math.ceil(Math.random()*1000)},${num})`;
        con.query(sql,function(err,result){
            if(err) throw err;
            console.log(result);
        });
    }else{
        console.log(req.body.srch=" was not saved"); 
    }
})

app.listen(3001,()=>{
    console.log("server is up and running");
});
