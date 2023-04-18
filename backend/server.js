var express = require('express');
var app = express();
var cors = require('cors');
var date = new Date();
var mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect("mongodb://localhost:27017/menu")

const UserSchema = new mongoose.Schema({
    title:String,
    price:String
},{collection:"bgk_menu"})

const User = mongoose.model("User",UserSchema)

// let hour  = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// let date_set = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay();

// if(hour>12){
//     hour=hour-12;    
// }

// let prop_date = "'"+date_set+" "+hour+":"+minute+":"+second+"'";

function req(){
    User.find().then((data)=>{
        console.log(data);
    }).catch();    
}

req();

app.listen(3001,()=>{
    console.log("server is up and running");
});
