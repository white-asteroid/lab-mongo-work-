var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err,dbClient){
    if(err) throw err;
    var dbo = dbClient.db("shivam");
    dbo.createCollection("user",function(err,res){
        if(err) throw err;
    console.log("db collection created");
    dbClient.close();
    });
    
    
});