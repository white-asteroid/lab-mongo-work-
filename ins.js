var MongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,dbclient){
    if(err) throw err;
    var dbo = dbclient.db("shivam");
    var myObj = [{
        "name":"shivam",
        "rollno":"02"
    },{
        "name":"aman",
        "rollno":"09"}];
        dbo.collection("user").insertMany(myObj,function(err,res){
            if(err) throw err;
            console.log("Data inserted");
            dbclient.close();
        });
});




