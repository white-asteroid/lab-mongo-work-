var MongoClient = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,dbclient){
    if(err) throw err;
    var dbo = dbclient.db("shivam");
    var myObj = {"name":"shivam"};
        var re = dbo.collection("user").find(myObj).toArray(function(err,res){
            if(err) throw err;
            console.log("Data found",re);
            dbclient.close();
        });
});
